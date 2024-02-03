const ch = require("chokidar");
const request = require("request");
const formData = require("form-data");
const fs = require("fs");

const { ssPaths, webhookUrl } = require('./config');

ch.watch([...ssPaths]).on("all", (event, path) => {
  if (event == "add") {
    console.log(path);
    sendtoDiscord(path);
  }
});

const sendtoDiscord = (path) => {
  try {
    const form = new formData();
    let fileName = path.split('/');
    form.append("content", `Screenshot of: ${fileName[fileName.length - 1].split('.')[0]}, **Server**: [${fileName[fileName.length - 3]}]`);
    form.append("file1", fs.createReadStream(path)); 

    request.post(webhookUrl, { body: form, headers: form.getHeaders() });
  } catch {
    setTimeout(sendtoDiscord(path), 800);
  }
}