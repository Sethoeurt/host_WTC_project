// build.js
console.log("Running custom build process...");
const fs = require('fs');
const path = require('path');

console.log("Building the project...");

// Example: Creating a simple output file
const outputPath = path.resolve(__dirname, 'dist');
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}
fs.writeFileSync(path.join(outputPath, 'index.html'), '<h1>Build Successful</h1>');

console.log("Build completed!");
