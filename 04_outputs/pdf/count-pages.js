const fs = require('fs');
const buf = fs.readFileSync(process.argv[2]);
const str = buf.toString('latin1');
const matches = str.match(/\/Type\s*\/Page[^s]/g);
console.log('Pages:', matches ? matches.length : 'unknown');
