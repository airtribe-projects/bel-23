const fs = require('fs');

const writableStream = fs.createWriteStream('../input/writeResponse.txt', {encoding: 'utf-8'});

writableStream.write("Hello World \n");

writableStream.write("This is a writable stream example \n");

for (let i=0; i< 1000000; i++) {
    writableStream.write(`Loop Index: ${i} \n`);
}

writableStream.end (() => {
    console.log('#####################')
    console.log("Closing Writable Stream");
});

// Handle error event
writableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});




