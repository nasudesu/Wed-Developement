const fs = require('fs');
const os = require('os');

try {
  const data = fs.readFileSync('sample.txt', 'utf8');
  console.log('File contents (Synchronous Read):', data);
} catch (err) {
  console.error('Error reading file:', err);
}

try {
  fs.writeFileSync('output.txt', 'This is some sample data (Synchronous Write).');
  console.log('Data written to output.txt (Synchronous Write)');
} catch (err) {
  console.error('Error writing file:', err);
}

console.log('Hostname:', os.hostname());
console.log('OS Platform:', os.platform());
console.log('CPU Cores:', os.cpus());


try {
  fs.writeFileSync('system_info.txt', `${os.hostname()}\n${os.platform}`);
  console.log('System information has been written to system_info.txt');
} catch (error) {
  console.log("Error reading file", error);
}