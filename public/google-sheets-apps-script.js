// Google Apps Script Web App for Sol Ethio Coder Project Specifications Form.
// 1. Create a Google Sheet with these headers:
// Submitted At | Name | Email | Subject | Budget | Project Type | Timeline | Message | Source
// 2. Extensions > Apps Script, paste this file, update SHEET_ID, deploy as Web App.
// 3. Set access to "Anyone" and add the deployed URL as VITE_GOOGLE_SHEETS_WEB_APP_URL.
// https://script.google.com/macros/s/AKfycbxqImU6OVIUIS2-FDZnG18c9TsyRVDOhStnu6bQPf2tz-4T347DztsqSHr3kFQqSN4Dfw/exec

const SHEET_ID = "11Z8W7LcBEeyJd7IDyGlWbYKf0gBZ-MofGrmYZNGkJzk";
const SHEET_NAME = "Project Leads";

function doPost(e) {
  try {
    const payload = getPayload(e);
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

    return jsonResponse({ status: "success", message: "Lead saved successfully" });
  } catch (error) {
    return jsonResponse({ status: "error", message: error.message });
  }
}

function doGet() {
  return jsonResponse({
    status: "ready",
    message: "Sol Ethio Coder Google Sheets endpoint is live",
    sheetName: SHEET_NAME,
  });
}

function getPayload(e) {
  if (e && e.parameter && Object.keys(e.parameter).length > 0) {
    if (e.parameter.payload) {
      try {
        return JSON.parse(e.parameter.payload);
      } catch (error) {
        return e.parameter;
      }
    }

    return e.parameter;
  }

  if (e && e.postData && e.postData.contents) {
    return JSON.parse(e.postData.contents);
  }

  return {};
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
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