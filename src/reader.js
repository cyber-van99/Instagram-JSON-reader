"use strict";
const fs = require("fs");

//Replace "./data/message.json" with your JSON file.
var rawdata = fs.readFileSync("./data/message.json");
var processedRaw = JSON.parse(rawdata);
var msgLength = processedRaw.messages.length;

while (msgLength > 0) {
  --msgLength;
  var ms = processedRaw.messages[msgLength].timestamp_ms;
  var showDate = new Date(ms).toDateString();
  var data =
    showDate +
    " " +
    processedRaw.messages[msgLength].sender_name +
    ":" +
    " " +
    processedRaw.messages[msgLength].content +
    "\n";
  fs.appendFileSync("./output-data/output.txt", data, { encoding: "utf8" });
}
