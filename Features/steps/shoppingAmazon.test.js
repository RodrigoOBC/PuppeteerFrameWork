const { When, Then, Given, Before,BeforeAll,After,AfterAll } = require("cucumber")
const puppeteer = require("puppeteer")
let AmaozonPage = require("../page/AmazonPage");

page = ''
AmazonPage = ''

Before(async function () {
    AmazonPage = new AmaozonPage()
    browser = await puppeteer.launch({ headless: false ,defaultViewport: null, args: ['--start-maximized']  })
    page = await browser.newPage()
    await page.setViewport({ width: 1366, height: 768});
})


Given(/^I am oline at Amazon Page$/, async () => {
    await AmazonPage.goTo(page,"https://www.amazon.com.br/")
	return true;
});

When(/^I search for "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I add "([^"]*)" at shopping car$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I should see "([^"]*)" in shopping cart$/, (args1) => {
	console.log(args1);
	return true;
});


Given(/^I am inside the shopping cart$/, () => {
	return true;
});

Then(/^There are at least two differents products in the shopping cart$/, () => {
	return true;
});

When(/^I remove the first product$/, () => {
	return true;
});

Then(/^I shouldn't see product in shopping cart$/, () => {
	return true;
});


When(/^I clean the shopping cart$/, () => {
	return true;
});

Then(/^I shouldn't see any products$/, () => {
	return true;
});
