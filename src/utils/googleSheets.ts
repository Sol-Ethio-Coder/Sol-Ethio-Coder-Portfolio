export type ProjectLeadSubmission = {
  id: string;
  name: string;
  email: string;
  subject: string;
  budget: string;
  projectType: string;
  timeline: string;
  message: string;
  source: string;
  pageUrl: string;
  userAgent: string;
  submittedAt: string;
};

export type GoogleSheetsResult = {
  ok: boolean;
  mode: "google-sheets" | "local-backup";
  message: string;
};

const env = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env;
const FALLBACK_GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbwOvEqoTDK9anXi9JDtEj4p_Dy6-Thq765HqVsKXaTxx2ffSpXm2yMuLCBIDXe5QknCCg/exec";

export const GOOGLE_SHEETS_WEB_APP_URL = env?.VITE_GOOGLE_SHEETS_WEB_APP_URL || FALLBACK_GOOGLE_SHEETS_URL;

export function createSubmissionId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `lead-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export async function submitLeadToGoogleSheets(submission: ProjectLeadSubmission): Promise<GoogleSheetsResult> {
  saveLeadBackup(submission);

  if (!GOOGLE_SHEETS_WEB_APP_URL) {
    return {
      ok: true,
      mode: "local-backup",
      message: "Saved locally. Add VITE_GOOGLE_SHEETS_WEB_APP_URL to connect Google Sheets.",
    };
  }

  postToGoogleSheetsWithoutCors(GOOGLE_SHEETS_WEB_APP_URL, submission);

  // Apps Script responses are not readable from static sites without CORS.
  // The form-target iframe pattern is the most reliable way to append rows from Netlify.
  await new Promise((resolve) => window.setTimeout(resolve, 1000));

  return {
    ok: true,
    mode: "google-sheets",
    message: "Submission sent to Google Sheets. A local backup was also saved in this browser.",
  };
}

export function saveLeadBackup(submission: ProjectLeadSubmission) {
  if (typeof window === "undefined") return;

  const storageKey = "solomon_project_leads";
  const existingLeads = window.localStorage.getItem(storageKey);
  const parsedLeads = existingLeads ? (JSON.parse(existingLeads) as ProjectLeadSubmission[]) : [];

  window.localStorage.setItem(storageKey, JSON.stringify([submission, ...parsedLeads].slice(0, 100)));
}

function postToGoogleSheetsWithoutCors(url: string, submission: ProjectLeadSubmission) {
  const iframeName = `sol-google-sheets-target-${submission.id}`;
  const iframe = document.createElement("iframe");
  iframe.name = iframeName;
  iframe.title = "Google Sheets submission target";
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

  document.body.appendChild(iframe);
  document.body.appendChild(form);
  form.submit();

  window.setTimeout(() => {
    form.remove();
    iframe.remove();
  }, 6000);
}