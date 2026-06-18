// Sol Ethio Coder - Google Sheets lead collector.
// Paste this entire file into Extensions > Apps Script for your Google Sheet.
// Then Deploy > New deployment > Web app > Execute as: Me > Who has access: Anyone.

const SHEET_ID = "11Z8W7LcBEeyJd7IDyGlWbYKf0gBZ-MofGrmYZNGkJzk";
const SHEET_NAME = "Project Leads";
const OWNER_EMAIL = "solash5156@gmail.com";

const HEADERS = [
  "Submitted At",
  "Lead ID",
  "Name",
  "Email",
  "Subject",
  "Budget",
  "Project Type",
  "Timeline",
  "Message",
  "Source",
  "Page URL",
  "User Agent",
];

function doGet() {
  ensureSheet();
  return jsonResponse({
    status: "ready",
    message: "Sol Ethio Coder Google Sheets endpoint is live.",
    sheetName: SHEET_NAME,
    requiredHeaders: HEADERS,
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const payload = readPayload(e);
    const sheet = ensureSheet();

    if (!payload.name || !payload.email || !payload.message) {
      return jsonResponse({ status: "error", message: "Missing required fields: name, email, or message." });
    }

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.id || Utilities.getUuid(),
      payload.name || "",
      payload.email || "",
      payload.subject || "",
      payload.budget || "",
      payload.projectType || "",
      payload.timeline || "",
      payload.message || "",
      payload.source || "Sol Ethio Coder Portfolio",
      payload.pageUrl || "",
      payload.userAgent || "",
    ]);

    SpreadsheetApp.flush();
    notifyOwner(payload);

    return jsonResponse({ status: "success", message: "Lead saved to Google Sheets." });
  } catch (error) {
    return jsonResponse({ status: "error", message: String(error && error.message ? error.message : error) });
  } finally {
    lock.releaseLock();
  }
}

function readPayload(e) {
  if (e && e.parameter && Object.keys(e.parameter).length > 0) {
    return e.parameter;
  }

  if (e && e.postData && e.postData.contents) {
    try {
      return JSON.parse(e.postData.contents);
    } catch (error) {
      return parseUrlEncoded(e.postData.contents);
    }
  }

  return {};
}

function ensureSheet() {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const needsHeaders = firstRow.every(function (cell) {
    return !cell;
  });

  if (needsHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function notifyOwner(payload) {
  if (!OWNER_EMAIL) return;

  const subject = "New portfolio project lead: " + (payload.subject || "Project inquiry");
  const body = [
    "New portfolio lead received.",
    "",
    "Name: " + (payload.name || ""),
    "Email: " + (payload.email || ""),
    "Subject: " + (payload.subject || ""),
    "Budget: " + (payload.budget || ""),
    "Project Type: " + (payload.projectType || ""),
    "Timeline: " + (payload.timeline || ""),
    "",
    "Message:",
    payload.message || "",
    "",
    "Page: " + (payload.pageUrl || ""),
  ].join("\n");

  MailApp.sendEmail(OWNER_EMAIL, subject, body);
}

function parseUrlEncoded(text) {
  return text.split("&").reduce(function (acc, pair) {
    const parts = pair.split("=");
    const key = decodeURIComponent(parts[0] || "");
    const value = decodeURIComponent((parts[1] || "").replace(/\+/g, " "));
    if (key) acc[key] = value;
    return acc;
  }, {});
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}

function testSubmission() {
  doPost({
    parameter: {
      id: Utilities.getUuid(),
      name: "Test Visitor",
      email: "test@example.com",
      subject: "Apps Script Test",
      budget: "$1,000 - $3,000",
      projectType: "Full Stack Web App",
      timeline: "2 - 4 weeks",
      message: "If you see this row, the Google Sheets integration works.",
      source: "Apps Script Manual Test",
      pageUrl: "manual-test",
      userAgent: "Apps Script",
      submittedAt: new Date().toISOString(),
    },
  });
}