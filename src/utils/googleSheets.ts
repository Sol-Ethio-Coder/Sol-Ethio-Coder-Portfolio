export type ProjectLeadSubmission = {
  name: string;
  email: string;
  subject: string;
  budget: string;
  projectType: string;
  timeline: string;
  message: string;
  source: string;
  submittedAt: string;
};

export type GoogleSheetsResult = {
  ok: boolean;
  mode: "google-sheets" | "local-backup";
  message: string;
};

const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
const DEFAULT_GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbwOvEqoTDK9anXi9JDtEj4p_Dy6-Thq765HqVsKXaTxx2ffSpXm2yMuLCBIDXe5QknCCg/exec";

export const GOOGLE_SHEETS_WEB_APP_URL = env?.VITE_GOOGLE_SHEETS_WEB_APP_URL ?? DEFAULT_GOOGLE_SHEETS_URL;

export async function submitLeadToGoogleSheets(submission: ProjectLeadSubmission): Promise<GoogleSheetsResult> {
  saveLeadBackup(submission);

  if (!GOOGLE_SHEETS_WEB_APP_URL) {
    return {
      ok: true,
      mode: "local-backup",
      message: "Saved locally. Add VITE_GOOGLE_SHEETS_WEB_APP_URL to send this form directly to Google Sheets.",
    };
  }

  submitWithHiddenForm(GOOGLE_SHEETS_WEB_APP_URL, submission);

  // Apps Script responses are not readable from static sites without CORS headers.
  // The hidden form pattern avoids CORS entirely and reliably appends rows.
  await new Promise((resolve) => window.setTimeout(resolve, 900));

  return {
    ok: true,
    mode: "google-sheets",
    message: "Sent to Google Sheets and backed up locally.",
  };
}

export function saveLeadBackup(submission: ProjectLeadSubmission) {
  if (typeof window === "undefined") return;

  const storageKey = "solomon_project_leads";
  const existingLeads = window.localStorage.getItem(storageKey);
  const parsedLeads = existingLeads ? (JSON.parse(existingLeads) as ProjectLeadSubmission[]) : [];

  window.localStorage.setItem(storageKey, JSON.stringify([submission, ...parsedLeads].slice(0, 50)));
}

function submitWithHiddenForm(url: string, submission: ProjectLeadSubmission) {
  const iframeName = `google-sheets-target-${Date.now()}`;
  const iframe = document.createElement("iframe");
  iframe.name = iframeName;
  iframe.style.display = "none";

  const form = document.createElement("form");
  form.method = "POST";
  form.action = url;
  form.target = iframeName;
  form.style.display = "none";

  Object.entries(submission).forEach(([key, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    form.appendChild(input);
  });

  const payloadInput = document.createElement("input");
  payloadInput.type = "hidden";
  payloadInput.name = "payload";
  payloadInput.value = JSON.stringify(submission);
  form.appendChild(payloadInput);

  document.body.appendChild(iframe);
  document.body.appendChild(form);
  form.submit();

  window.setTimeout(() => {
    form.remove();
    iframe.remove();
  }, 5000);
}