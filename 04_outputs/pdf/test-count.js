const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const htmlPath = path.resolve(__dirname, 'leadmagnet.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

  // Get total content height and calculate pages
  const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
  // A4 = 297mm, margins = 25mm top + 25mm bottom = 50mm, printable = 247mm
  // 1mm ≈ 3.78px at 96dpi
  const pageHeightPx = 247 * 3.78;
  const estimatedPages = Math.ceil(bodyHeight / pageHeightPx) + 0; // page-breaks add pages

  // Count explicit page-breaks in HTML
  const breakCount = await page.evaluate(() => document.querySelectorAll('.page-break').length);

  console.log(`Body height: ${bodyHeight}px`);
  console.log(`Page height: ${Math.round(pageHeightPx)}px`);
  console.log(`Explicit page breaks: ${breakCount}`);
  console.log(`Estimated pages from height: ${Math.ceil(bodyHeight / pageHeightPx)}`);

  await browser.close();
})();
