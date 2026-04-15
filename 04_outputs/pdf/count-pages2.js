const fs = require('fs');
const buf = fs.readFileSync(process.argv[2]);
const str = buf.toString('latin1');
// Look for /Type /Pages (with 's') which contains /Count N
const pagesMatch = str.match(/\/Type\s*\/Pages[^>]*\/Count\s+(\d+)/);
if (pagesMatch) {
  console.log('Pages:', pagesMatch[1]);
} else {
  console.log('Could not find page count');
}
