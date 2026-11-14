const autocannon = require('autocannon');
// Jmeter
const instance = autocannon({
    url: 'http://localhost:3000',
    connections: 50,
    pipelining: 5,
    duration: 10
}, console.log);

// Track progress
autocannon.track(instance, { renderProgressBar: true });