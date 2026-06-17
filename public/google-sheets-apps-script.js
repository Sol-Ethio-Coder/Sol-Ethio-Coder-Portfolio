// Google Apps Script Web App for Sol Ethio Coder Project Specifications Form.
// 1. Create a Google Sheet with these headers:
// Submitted At | Name | Email | Subject | Budget | Project Type | Timeline | Message | Source
// 2. Extensions > Apps Script, paste this file, update SHEET_ID, deploy as Web App.
// 3. Set access to "Anyone" and add the deployed URL as VITE_GOOGLE_SHEETS_WEB_APP_URL.

const SHEET_ID = "11Z8W7LcBEeyJd7IDyGlWbYKf0gBZ-MofGrmYZNGkJzk";
const SHEET_NAME = "Project Leads";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");
    const sheet = getLeadSheet();

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.name || "",
      payload.email || "",
      payload.subject || "",
      payload.budget || "",
      payload.projectType || "",
      payload.timeline || "",
      payload.message || "",
      payload.source || "Sol Ethio Coder Portfolio",
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success" })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.message })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getLeadSheet() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(["Submitted At", "Name", "Email", "Subject", "Budget", "Project Type", "Timeline", "Message", "Source"]);
  }

  return sheet;
}