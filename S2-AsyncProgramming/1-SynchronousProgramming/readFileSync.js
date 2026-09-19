const fs = require('fs');

const filePath = "./input/lengthyFile.txt";

console.time("ReadFile");

const data = fs.readFileSync(filePath, 'utf-8');

console.log("Reading file completed");
console.timeEnd("ReadFile");


for (let i=0; i<100; i++) {
    console.log(`Doing more work ${i}`);
}