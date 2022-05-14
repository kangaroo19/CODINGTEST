const input = require('fs').readFileSync('example.txt').toString().trim().split('\n');
const nums = input.map(v => v.split(' ').map(x => +x));

