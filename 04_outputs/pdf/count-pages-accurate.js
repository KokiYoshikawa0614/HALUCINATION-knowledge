const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, 'leadmagnet.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Generate PDF to buffer and count pages
  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true,
    margin: { top: '25mm', bottom: '25mm', left: '25mm', right: '25mm' },
  });

  // Count /Type /Page occurrences more accurately
  const str = pdfBuffer.toString('latin1');
  // Match /Type /Page but not /Type /Pages
  const pages = (str.match(/\/Type\s*\/Page\b(?!s)/g) || []).length;
  console.log('Pages:', pages);

  await browser.close();
})();
