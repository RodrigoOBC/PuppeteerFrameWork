const { When, Then, Given, Before,BeforeAll,After,AfterAll } = require("cucumber")
const puppeteer = require("puppeteer")
let AmaozonPage = require("../page/AmazonPage");

page = ''
AmazonPage = ''

function sleep(ms) {
	return new Promise((resolve) => {
	  setTimeout(resolve, ms);
	});
  }

BeforeAll(async function () {
    AmazonPage = new AmaozonPage()
    browser = await puppeteer.launch({ headless: false ,defaultViewport: null, args: ['--start-maximized']  })
	page = await browser.newPage()
    await page.setViewport({ width: 1366, height: 768});
})

After(async function () {
    page = await browser.newPage()	
})

Given(/^I am oline at Amazon Page$/, async () => {
    await AmazonPage.goTo(page,"https://www.amazon.com.br/")
});

When(/^I search for "([^"]*)"$/, async  (args1) => {
	await AmazonPage.searchProducts(page,args1)
});

When(/^I add "([^"]*)" at shopping car$/, async  (args1) => {
	await AmazonPage.addProduct(page,args1)
	await AmazonPage.goCart(page)
});

Then(/^I should see "([^"]*)" in shopping cart$/, async  (args1) => {
	await AmazonPage.checkProduct(page,args1)
});

Given(/^There are at least two differents products in the shopping cart$/, async () => {
	await AmazonPage.goTo(page,"https://www.amazon.com.br/")
	
});

Given(/^I am inside the shopping cart$/, async () => {
	await AmazonPage.searchProducts(page,"DC Graphic Novels. Superman. Brainiac")
	await AmazonPage.addProduct(page,"DC Graphic Novels. Superman. Brainiac")
	await AmazonPage.goCart(page)
});

When('I remove the first product', function () {
	// Write code here that turns the phrase above into concrete actions
	return 'pending';
  });

  Then('I shouldn\'t see product in shopping cart', function () {
	// Write code here that turns the phrase above into concrete actions
	return 'pending';
  });