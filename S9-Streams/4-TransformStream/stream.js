const fs = require('fs');
const { Transform } = require('stream');

const readableStream = fs.createReadStream('../input/leviathan.txt');

const writableStream = fs.createWriteStream('../output/outputLowercase.txt');


const lowerCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toLowerCase());
        callback();     
    }   
});


readableStream
    .pipe(lowerCaseTransform)
    .pipe(writableStream);

writableStream.on('finish', () => {
    console.log('Finished transforming and writing to file.');
});