function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Antworten");
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.klasse,
    data.verstaendlich,
    data.atmosphaere,
    data.fairness,
    data.abwechslung,
    data.hilfe,
    data.zufriedenheit,
    data.gelernt,
    data.gefallen,
    data.aendern,
    data.schwierig,
    data.sonstiges
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
