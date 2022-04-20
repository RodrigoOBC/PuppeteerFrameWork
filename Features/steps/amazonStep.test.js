const expect = require('chai').expect
const puppeteer = require('puppeteer')
let AmaozonElementos = require("../Page/AmazonPage");


describe('Gerenciar Carrinho de compra da Amazon', () => {
    let page = ""
    let browser = ""
    it('Inicio o Browser', async function () {
        AmaozonElementos = new AmaozonElementos()
        browser = await puppeteer.launch({ headless: false ,defaultViewport: null, args: ['--start-maximized']  })
        page = await browser.newPage()
        await page.setViewport({ width: 1366, height: 768});
    })

    it('Adciono protudo ao carrinho ', async function () {
        await page.goto(AmaozonElementos.UrlPage)
        await page.waitForSelector(AmaozonElementos.CampoPesquisar)
        await page.click(AmaozonElementos.CampoPesquisar)
        await page.type(AmaozonElementos.CampoPesquisar, 'Batman o longo dia das Bruxas')
        await page.click(AmaozonElementos.BotaoPesquisar)
        await page.waitForXPath(AmaozonElementos.Produto)
        let produto = await page.$x(AmaozonElementos.Produto);
        await produto[0].click()
        await page.waitForXPath(AmaozonElementos.ProdutoTitulo)
        let element = await page.$x(AmaozonElementos.ProdutoTitulo)
        let value = await page.evaluate(el => el.textContent, element[0])
        expect('\nBatman - O Longo Dia das Bruxas - Edição Definitiva\n').to.equal(value)
        await page.click(AmaozonElementos.AdicionarCarrinho)
        await page.waitForXPath(AmaozonElementos.CarinhoBotão)
        let carrinho = await page.$x(AmaozonElementos.CarinhoBotão);
        await carrinho[0].click()
        await page.waitForXPath(AmaozonElementos.ProdutoNoCarrinho)
        element = await page.$x(AmaozonElementos.ProdutoNoCarrinho)
        value = await page.evaluate(el => el.textContent, element[0])
        expect('Batman - O Longo Dia das Bruxas - Edição Definitiva').to.equal(value)
        
    })

    it('Excluo protudo do carrinho ', async function () {
        await page.waitForXPath(AmaozonElementos.ExcluirProdutoCarrinho)
        element = await page.$x(AmaozonElementos.ExcluirProdutoCarrinho)
        element[0].click()

        await page.waitForXPath('//*[@class="a-spacing-mini a-spacing-top-base"]')
        element = await page.$x('//*[@class="a-spacing-mini a-spacing-top-base"]')
        value = await page.evaluate(el => el.textContent, element[0])
        expect('\nSeu carrinho de compras da Amazon está vazio.\n').to.equal(value)

        await browser.close()
    })
})