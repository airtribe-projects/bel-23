const fs = require('fs');

// For larger files don;t use fs.readFileSync / fs.readFile
// const readableFile = fs.readFileSync('../input/leviathan.txt');
const readableStream = fs.createReadStream('../input/leviathan.txt', {encoding: 'utf8', highWaterMark: 1 * 1024});

readableStream.on('data', (chunk) => {
    console.log('$$ Received chunk with length', chunk.length, chunk.toString());
});


readableStream.on('end', () => {
    console.log('#####################')
    console.log('No more data to read.');
});

// Handle error event
readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});




