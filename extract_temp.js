const Tesseract = require('tesseract.js');
const fs = require('fs');
const path = require('path');

const dir = "c:\\Users\\aryan\\Desktop\\MY PROJECTS\\portfolio\\priyanshu\\public\\Certificates";
const files = fs.readdirSync(dir).filter(f => f.startsWith('Screenshot') && f.endsWith('.png'));

async function processFiles() {
  for (const file of files) {
    const fullPath = path.join(dir, file);
    try {
      const { data: { text } } = await Tesseract.recognize(fullPath, 'eng');
      const textOutput = `\n--- ${file} ---\n${text.substring(0, 300).replace(/\n/g, ' ')}`;
      fs.appendFileSync('ocr_output.txt', textOutput);
    } catch (e) {
      console.log(`Failed on ${file}: ${e}`);
    }
  }
}
processFiles();
