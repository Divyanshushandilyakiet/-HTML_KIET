// Synchronous and blocking
// -line by line execution

// Asynchronous and Non-
// -line by line execution not sured 
// - callbacks will fire 

const fs = require("fs");
let text = fs.readFile("dele.txt", "utf-8", (err, data)=>{
    console.log(err, data);
});
console.log("This is a message");
