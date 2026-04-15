const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const htmlPath = path.resolve(__dirname, 'leadmagnet.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  const pdfPath = path.resolve(__dirname, 'HALUCINATION_leadmagnet_v9.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '25mm', bottom: '25mm', left: '25mm', right: '25mm' },
    displayHeaderFooter: false,
  });

  const sizeMB = (fs.statSync(pdfPath).size / (1024 * 1024)).toFixed(1);
  console.log(`PDF generated: HALUCINATION_leadmagnet_v9.pdf (${sizeMB} MB)`);

  const { PDFDocument } = require('pdf-lib');
  const buf = fs.readFileSync(pdfPath);
  const doc = await PDFDocument.load(buf);
  console.log(`Pages: ${doc.getPageCount()}`);

  await browser.close();
})();
