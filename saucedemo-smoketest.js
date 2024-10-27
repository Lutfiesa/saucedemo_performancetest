import { browser } from 'k6/browser';
import http from 'k6/http'
import { sleep } from 'k6';

export const options = {
    thresholds: {
        'http_req_duration': ['p(95)<2000', 'avg<1000'], 
        'http_req_failed': ['rate<0.05'], 
    },
    scenarios: {
        smokeTest: {
            executor: 'per-vu-iterations',
            vus: 10, 
            iterations: 5,
            maxDuration: '1m',
            options: {
                browser: {
                    type: 'chromium', 
                },
            },
        },
    },
  }

export default async function () {

   // const browser = await chromium.launch({ headless: false });
    //const context = await browser.newContext();
    const page = await browser.newPage();

    try {
        
    await page.goto('https://www.saucedemo.com/')
    //Login Saoucedemo
    await page.locator("//input[@id='user-name']").type('standard_user')
    await page.locator("//input[@id='password']").type('secret_sauce')
    await page.locator("//input[@id='login-button']").click()
    //Add Cart
    await page.locator("//div[normalize-space()='Sauce Labs Backpack']").click()
    await page.locator("//button[@id='add-to-cart']").click()
    //Payment
    await page.locator("//a[@class='shopping_cart_link']").click()
    await page.locator("//button[@id='checkout']").click()
    await page.locator("//input[@id='first-name']").type('Lutfi')
    await page.locator("//input[@id='last-name']").type('Esa')
    await page.locator("//input[@id='postal-code']").type('11001')
    await page.locator("//input[@id='continue']").click()
    await page.locator("//button[@id='finish']").click()
    await page.locator("//button[@id='back-to-products']").click()

    }

    finally {
        page.close()
      }

}

