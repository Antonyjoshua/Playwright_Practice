import {chromium, test} from "@playwright/test";
test("To launch a browser", async () => {
   const browser = await chromium.launch()
  const browserContext = await browser.newContext()
    const page = await browserContext.newPage()
    await page.goto("https://portal.scopethinkers.com/")
})
