import { Injectable } from '@nestjs/common';
import { chromium, firefox } from 'playwright';

export interface CaptureTweetOptions {
  colorScheme?: 'light' | 'dark' | 'no-preference' | undefined;
  locale?: string; 
  quality?: number;
  type?: 'jpeg' | 'png';
}

const defaultOptions: CaptureTweetOptions = {
  colorScheme: 'light',
  locale: 'de-DE', 
  quality: 85,
  type: 'jpeg'
};

@Injectable()
export class CaptureService {

  async captureTweet(id: string, options: CaptureTweetOptions = defaultOptions): Promise<Buffer> {
    const {colorScheme, locale, quality, type} = options;
    const browser = await chromium.launch();
    const userAgent = await (await browser.newPage()).evaluate(() => navigator.userAgent);
    const url = `https://twitter.com/user/status/${id}`;

    const page = await browser.newPage({
      colorScheme,
      locale,
      userAgent: userAgent.replace('HeadlessChrome', 'Chrome'),
      viewport: { width: 1920, height: 1280 }
    });

    await page.goto(url, {timeout: 300000});
    await page.locator('article').waitFor();

    await page.evaluate(() => {
      document.querySelector('[aria-haspopup="menu"]')?.remove();
      document.querySelector('[role="group"]:last-of-type')?.remove();
      (document.querySelector('[data-testid="primaryColumn"]') as HTMLElement).style.border = 'none';
    });

    const selector = `article:has(a[href*="/${id}/"])`;
    const buffer = await page.locator(selector).screenshot({quality,type});
    
    await browser.close();

    return buffer;
  }
}
