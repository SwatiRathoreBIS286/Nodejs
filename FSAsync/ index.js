const fs = require("fs");

// fs.writeFile("read.txt", "today is awesome day :)", (err) => {
//   console.log("files is created");
//   console.log(err);
// });

// Points remeber

// we pass them a function as an argument – a callback –
// that gets called when that task completes.
// The callback has an argument that tells you whether the operation completed successfully.
// Now we need to say what to do when fs.writeFile
// has completed (even if it’s nothing), and start
//  checking for errors.

// WE CAN APPEND DATA ASWELL USING APPENDFILE(FILE NAME , DATA TO PASS)

// fs.appendFile("read.txt", "hello nodejs world ", (err) => {
//   console.log("task completed");
// });

fs.readFile("read.txt", "UTF-8", (err, data) => {
  console.log(data);
});
console.log("nodejs is awesome");
