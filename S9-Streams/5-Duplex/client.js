const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
    console.log('Connected to chat server');
    
    // To send data from the terminal to the server
    process.stdin.pipe(client); 
});


client.on('data', (data) => {
  console.log(`Received: ${data}`);
});


// House keeping
client.on('end', () => {
  console.log('Disconnected from chat server');
});

client.on('error', (err) => {
  console.error('Client error:', err);
});
