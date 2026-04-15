const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, 'leadmagnet.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  await page.pdf({
    path: path.resolve(__dirname, 'HALUCINATION_leadmagnet_v3.pdf'),
    format: 'A4',
    printBackground: true,
    margin: { top: '25mm', bottom: '25mm', left: '25mm', right: '25mm' },
    displayHeaderFooter: false,
  });

  console.log('PDF generated: HALUCINATION_leadmagnet_v3.pdf');
  await browser.close();
})();
