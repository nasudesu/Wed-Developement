/*
const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
    console.error('Error reading file:', err);
    } else {
    console.log('File contents:', data);
    }
});

fs.writeFile('output.txt', 'This is some sample data.', (err) => {
  if (err) {
  console.error('Error writing file:', err);
  } else {
  console.log('Data written to output.txt');
  }
});

const os = require('os');

console.log('Hostname:', os.hostname());
console.log(os.platform());
console.log(os.cpus());
*/

const fs = require('fs').promises;
const os = require('os');

async function readFileAndLogOSInfo() {
 try {
   const data = await fs.readFile('output.txt', 'utf8');
   console.log('Data from file:', data);

   const platform = os.platform();
   console.log('OS Platform:', platform);
 } catch (error) {
   console.error('Error:', error);
 }
}

readFileAndLogOSInfo();