const { Then, When, Given } = require("@cucumber/cucumber");
const assert = require("assert");

const scope = require("../support/scope");

Given("I am a user", () => null);
const loadSite = async (pathname = "/") => {
  await scope.page.goto(`http://localhost:3000${pathname}`);
};
When("I visit the {string} page", async (string) => {
  await loadSite(string);
});
When("I type {string} into the search input", async (string) => {
  await scope.page.type('input[type="search"]', string);
});
When("click the submit input", async () => {
  const submitButton = await scope.page.$("input[type='submit']");
  await submitButton.click();
  await scope.page.waitForNavigation();
});
Then("I see the message {string}", async (string) => {
  const actual = await scope.page.evaluate(
    (text) => document.querySelector("body").innerText.includes(text),
    string,
  );
  assert.strictEqual(actual, true);
});

Then("I can see a search input form", async () => {
  const form = await scope.page.$("form");
  const input = await form.$("input[type='search']");
  assert.strictEqual(!!form, true);
  assert.strictEqual(!!input, true);
});
Then("I can type {string} into the search input", async (string) => {
  await scope.page.type('input[type="search"]', string);
  const actual = await scope.page.evaluate(() => {
    const input = document.querySelector("input[type='search']");
    return input.value;
  });

  assert.strictEqual(actual, string);
});
Then("I am taken to the {string} page", async (string) => {
  const pathname = await scope.page.evaluate(() => window.location.pathname);
  assert.strictEqual(pathname, string);
});
Then(
  "the query parameter {string} is equal to {string}",
  async (string, string2) => {
    const parameterValue = await scope.page.evaluate((parameter) => {
      const params = new URLSearchParams(document.location.search.substring(1));
      return params.get(parameter);
    }, string);
    assert.strictEqual(parameterValue, string2);
  },
);
