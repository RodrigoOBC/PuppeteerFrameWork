const expect = require('chai').expect
const puppeteer = require('puppeteer')

module.exports = class AmazonPage {

    async goTo(page, url) {
        await page.goto(url)
    }

    async searchProducts(page, product) {

        await page.waitForSelector('input[id="twotabsearchtextbox"]')
        await page.click('input[id="twotabsearchtextbox"]')
        await page.type('input[id="twotabsearchtextbox"]', product)
        await page.click('div[class="nav-search-submit nav-sprite"]')
        await page.waitForXPath('//span[text()="' + product + '"]')

    }

    async addProduct(page, product) {

        await page.waitForXPath('//span[text()="'+product+'"]')
        const elements = await page.$x('//span[text()="'+product+'"]')
        await elements[0].click()
        // await page.click('//span[text()="Batman - O Longo Dia das Bruxas - Edição Definitiva"]')
        await page.waitForXPath('//*[@id="productTitle"]')
        let element = await page.$x('//*[@id="productTitle"]')
        let value = await page.evaluate(el => el.textContent, element[0])
        expect(' '+product+' ').to.equal(value)
        await page.click("#add-to-cart-button")
    }

    async goCart(page) {

        await page.waitForXPath('//*[@id="nav-cart-count-container"]/span[2]')
        let carrinho = await page.$x('//*[@id="nav-cart-count-container"]/span[2]');
        await carrinho[0].click()

    }

    async checkProduct(page, product) {

        await page.waitForXPath('//span[@class="a-truncate-full a-offscreen"][text()="'+product+'"]')
        let element = await page.$x('//span[@class="a-truncate-full a-offscreen"][text()="'+product+'"]')
        let value = await page.evaluate(el => el.textContent, element[0])
        expect(product).to.equal(value)

    }
    
}
