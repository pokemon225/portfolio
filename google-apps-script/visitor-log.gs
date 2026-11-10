// Google Apps Script that receives visits from worker/index.js and appends
// them to the "Visitors" tab of the spreadsheet it's attached to.
// Setup: open the sheet → Extensions → Apps Script, paste this file, set
// TOKEN, then Deploy → New deployment → Web app. See README "Visitor log".

// Must match the VISITOR_LOG_TOKEN secret on Cloudflare
const TOKEN = 'PASTE-YOUR-SECRET-TOKEN-HERE';
const SHEET_NAME = 'Visitors';
const TIME_ZONE = 'Asia/Tokyo';

const HEADERS = [
  'Time (JST)',
  'IP',
  'City',
  'Region',
  'Country',
  'Postal code',
  'Latitude',
  'Longitude',
  'Timezone',
  'Network',
  'Page',
  'Referrer',
  'Bot',
  'User agent',
];

// Visitor-controlled text (referrer, user agent) must not run as a formula
const safe = value => {
  if (value === undefined || value === null) return '';
  const text = String(value);
  return /^[=+\-@]/.test(text) ? "'" + text : text;
};

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (String(data.token).trim() !== TOKEN.trim()) {
    return ContentService.createTextOutput('forbidden');
  }
  appendVisit(data);
  return ContentService.createTextOutput('ok');
}

// Select this function in the editor's toolbar and click Run to check that
// the script can write to this sheet (adds one test row).
function testSetup() {
  appendVisit({
    time: new Date().toISOString(),
    ip: 'TEST - setup check (delete this row)',
    city: 'Tokyo',
    country: 'JP',
    page: '/',
    bot: false,
    userAgent: 'testSetup',
  });
}

function appendVisit(data) {
  // Several visits can arrive at once; append one at a time
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const book = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
    }
    sheet.appendRow([
      Utilities.formatDate(new Date(data.time), TIME_ZONE, 'yyyy-MM-dd HH:mm:ss'),
      safe(data.ip),
      safe(data.city),
      safe(data.region),
      safe(data.country),
      safe(data.postalCode),
      safe(data.latitude),
      safe(data.longitude),
      safe(data.timezone),
      safe(data.network),
      safe(data.page),
      safe(data.referrer),
      data.bot ? 'yes' : 'no',
      safe(data.userAgent),
    ]);
  } finally {
    lock.releaseLock();
  }
}
