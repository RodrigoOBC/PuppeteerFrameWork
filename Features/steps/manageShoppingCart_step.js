
Given(/^I am oline at Amazon Page$/, () => {
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
