const puppeteer = require('puppeteer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const MAX_WIDTH = 1200;
const QUALITY = 80;

const IMAGE_PATHS = [
  'raw-data/正式ポスター.jpg',
  'raw-data/映画の準備と後処理/画像/水を飲む/水を飲む２回-topaz-face-upscale-3x.png',
  'raw-data/映画の準備と後処理/画像/ホラーショットの準備/満足７本番-topaz-sharpen-upscale-3x.png',
  'raw-data/KaworuYagamibase-topaz-face-upscale-4x-2.png',
  'raw-data/gemini-chats/リアルな映画シーン生成プロンプト/スクリーンショット 2026-04-02 003543.png',
  'raw-data/映画の準備と後処理/画像/ラストシーン/ラストシーンの電話-topaz-face-upscale-3x.png',
  'raw-data/gemini-chats/LoRaプロンプト編集とシーン作成/スクリーンショット 2026-04-02 012225.png',
  'raw-data/映画の準備と後処理/画像/ホラーショットの準備/顔上向き本番-topaz-sharpen-denoise-upscale-3840w.png',
  'raw-data/Whiskの画像/スクリーンショット 2026-04-03 173054.png',
  'raw-data/映画の準備と後処理/画像/立って電話/もしもし-topaz-face-upscale-2160h.png',
];

(async () => {
  const repoRoot = path.resolve(__dirname, '..', '..');
  const resizedDir = path.resolve(__dirname, '_resized');
  if (!fs.existsSync(resizedDir)) fs.mkdirSync(resizedDir, { recursive: true });

  console.log('Resizing...');
  for (let i = 0; i < IMAGE_PATHS.length; i++) {
    const srcPath = path.join(repoRoot, IMAGE_PATHS[i]);
    const outPath = path.join(resizedDir, `img_${i}.jpg`);
    const meta = await sharp(srcPath).metadata();
    if (meta.width > MAX_WIDTH) {
      await sharp(srcPath).resize(MAX_WIDTH).jpeg({ quality: QUALITY }).toFile(outPath);
    } else {
      await sharp(srcPath).jpeg({ quality: QUALITY }).toFile(outPath);
    }
  }

  let html = fs.readFileSync(path.resolve(__dirname, 'leadmagnet.html'), 'utf-8');
  for (let i = 0; i < IMAGE_PATHS.length; i++) {
    html = html.split('../../' + IMAGE_PATHS[i]).join('_resized/img_' + i + '.jpg');
  }

  const tmpHtml = path.resolve(__dirname, '_tmp_v7.html');
  fs.writeFileSync(tmpHtml, html);

  console.log('Generating PDF...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`file://${tmpHtml}`, { waitUntil: 'networkidle0' });

  const pdfPath = path.resolve(__dirname, 'HALUCINATION_leadmagnet_v7_compressed.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '25mm', bottom: '25mm', left: '25mm', right: '25mm' },
    displayHeaderFooter: false,
  });

  await browser.close();
  const sizeMB = (fs.statSync(pdfPath).size / (1024 * 1024)).toFixed(1);
  console.log(`Done: HALUCINATION_leadmagnet_v7_compressed.pdf (${sizeMB} MB)`);
  fs.unlinkSync(tmpHtml);
})();
