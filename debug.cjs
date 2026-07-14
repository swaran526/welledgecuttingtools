const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
      console.log(`[${msg.type()}] ${msg.text()}`);
    }
  });

  page.on('pageerror', error => {
    console.log(`[pageerror] ${error.message}`);
  });

  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  
  // Wait a bit to catch any deferred errors
  await page.waitForTimeout(3000);
  
  await browser.close();
})();
