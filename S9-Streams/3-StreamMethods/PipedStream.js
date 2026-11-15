const fs = require('fs');
const readableStream = fs.createReadStream('../input/leviathan.txt', {highWaterMark: 100*1024});

const writableStream = fs.createWriteStream('../output/outputBook.txt', {highWaterMark: 1*1024});


readableStream.pipe(writableStream);

// readableStream.on('data', (chunk) => {
//   console.log(`Read ${chunk.length} bytes`);
//   const canWrite = writableStream.write(chunk); 

//   if (!canWrite) {
//     console.log("Pausing Readable Stream");
//     readableStream.pause();
//   }
// })



// writableStream.on('drain', () => {
//     console.log("Resuming Readable Stream");
//     readableStream.resume();
// })

readableStream.on('end', () => {
  console.log('Readable stream ended');
  writableStream.end();
});

readableStream.on('error', (err) => {
  console.error('Error reading file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing file:', err);
});