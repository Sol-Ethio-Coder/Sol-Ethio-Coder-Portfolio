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

export const GOOGLE_SHEETS_WEB_APP_URL = env?.VITE_GOOGLE_SHEETS_WEB_APP_URL ?? "";

export async function submitLeadToGoogleSheets(submission: ProjectLeadSubmission): Promise<GoogleSheetsResult> {
  saveLeadBackup(submission);

  if (!GOOGLE_SHEETS_WEB_APP_URL) {
    return {
      ok: true,
      mode: "local-backup",
      message: "Saved locally. Add VITE_GOOGLE_SHEETS_WEB_APP_URL to send this form directly to Google Sheets.",
    };
  }

  await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
    method: "POST",
    mode: "no-cors",
    redirect: "follow",
    headers: {
      "Content-Type": "text/plain;charset=utf-8",
    },
    body: JSON.stringify(submission),
  });

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