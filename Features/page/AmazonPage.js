const expect = require('chai').expect
const puppeteer = require('puppeteer')

module.exports = class AmazonPage{

    async goTo(page,url){
        await page.goto(url)
    }
}
