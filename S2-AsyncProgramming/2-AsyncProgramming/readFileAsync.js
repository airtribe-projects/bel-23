const fs = require('fs');

const filePath = "../input/lengthyFile.txt";

console.time("ReadFile");

fs.readFile(filePath, 'utf-8', (err, data) => {
    console.log("Reading file completed");
});

console.timeEnd("ReadFile");

for (let i=0; i<5; i++) {
    console.log(`Doing more work ${i}`);
}