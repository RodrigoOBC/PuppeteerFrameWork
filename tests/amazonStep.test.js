const expect = require('chai').expect
const puppeteer = require('puppeteer')


describe('Gerenciar Carrinho de compra da Amazon', () => {
    let page = ""
    let browser = ""
    it('Inicio o Browser', async function () {
        browser = await puppeteer.launch({ headless: false })
        page = await browser.newPage()
    })

    it('Adciono protudo ao carrinho ', async function () {
        await page.goto('https://www.amazon.com.br/')
        await page.waitForSelector('#twotabsearchtextbox')
        await page.click('input[id="twotabsearchtextbox"]')
        await page.type('input[id="twotabsearchtextbox"]', 'Batman o longo dia das Bruxas')
        await page.click('div[class="nav-search-submit nav-sprite"]')
        await page.waitForXPath('//span[text()="Batman - O Longo Dia das Bruxas - Edição Definitiva"]')
        let produto = await page.$x('//span[text()="Batman - O Longo Dia das Bruxas - Edição Definitiva"]');
        await produto[0].click()
        await page.waitForXPath('//*[@id="productTitle"]')
        let element = await page.$x('//*[@id="productTitle"]')
        let value = await page.evaluate(el => el.textContent, element[0])
        expect('\nBatman - O Longo Dia das Bruxas - Edição Definitiva\n').to.equal(value)
        await page.click("#add-to-cart-button")
        await page.waitForXPath('//*[@id="nav-cart-count-container"]/span[2]')
        let carrinho = await page.$x('//*[@id="nav-cart-count-container"]/span[2]');
        await carrinho[0].click()
        await page.waitForXPath('//span[@class="a-truncate-full a-offscreen"]')
        element = await page.$x('//span[@class="a-truncate-full a-offscreen"]')
        value = await page.evaluate(el => el.textContent, element[0])
        expect('Batman - O Longo Dia das Bruxas - Edição Definitiva').to.equal(value)
        
    })

    it('Excluo protudo do carrinho ', async function () {
        page = await browser.newPage()

        await page.goto('https://www.amazon.com.br/')
        await page.waitForSelector('#twotabsearchtextbox')
        await page.click('input[id="twotabsearchtextbox"]')
        await page.type('input[id="twotabsearchtextbox"]', 'Batman o longo dia das Bruxas')
        await page.click('div[class="nav-search-submit nav-sprite"]')
        await page.waitForXPath('//span[text()="Batman - O Longo Dia das Bruxas - Edição Definitiva"]')
        let produto = await page.$x('//span[text()="Batman - O Longo Dia das Bruxas - Edição Definitiva"]');
        await produto[0].click()
        await page.waitForXPath('//*[@id="productTitle"]')
        let element = await page.$x('//*[@id="productTitle"]')
        let value = await page.evaluate(el => el.textContent, element[0])
        expect('\nBatman - O Longo Dia das Bruxas - Edição Definitiva\n').to.equal(value)
        await page.click("#add-to-cart-button")
        await page.waitForXPath('//*[@id="nav-cart-count-container"]/span[2]')
        let carrinho = await page.$x('//*[@id="nav-cart-count-container"]/span[2]');
        await carrinho[0].click()
        await page.waitForXPath('//span[@class="a-truncate-full a-offscreen"]')
        element = await page.$x('//span[@class="a-truncate-full a-offscreen"]')
        value = await page.evaluate(el => el.textContent, element[0])
        expect('Batman - O Longo Dia das Bruxas - Edição Definitiva').to.equal(value)
        
        await page.waitForXPath('//*[@value="Excluir"]')
        element = await page.$x('//*[@value="Excluir"]')
        element[0].click()

        await page.waitForXPath('//*[@class="a-spacing-mini a-spacing-top-base"]')
        element = await page.$x('//*[@class="a-spacing-mini a-spacing-top-base"]')
        value = await page.evaluate(el => el.textContent, element[0])
        expect('\nSeu carrinho de compras da Amazon está vazio.\n').to.equal(value)

        await browser.close()
    })
})