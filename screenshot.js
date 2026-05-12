const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 1080 } });

  await page.goto('http://localhost:8000/index.html', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'new_narrative.png', fullPage: true });

  await browser.close();
})();
