const fs = require("fs");
let text = fs.readFileSync("dele.txt","utf-8");
text = text.replace("delete","save");

console.log("I want to ")
console.log(text);

console.log("creating a new file....");
fs.writeFileSync("save.txt",text);
