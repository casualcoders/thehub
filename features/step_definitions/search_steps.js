const { Then, When, Given } = require("@cucumber/cucumber");
const { assert } = require("assert");

const scope = require("../support/scope");

Given("I am a user", () => null);
const loadSite = async () => {
  await scope.page.goto("http://localhost:3000/");
};
Given("I am on the home page", async () => {
  await loadSite();
});
When("I visit the home page", async () => {
  await loadSite();
});
When(
  "I click on the search input form",
  () =>
    // Write code here that turns the phrase above into concrete actions
    "pending",
);
When(
  "type <search input>",
  () =>
    // Write code here that turns the phrase above into concrete actions
    "pending",
);
When(
  "click the submit button",
  () =>
    // Write code here that turns the phrase above into concrete actions
    "pending",
);
Then("I can see a search input form", () => {
  const form = scope.page.$("form");
  assert.equal(form, []);
});
Then(
  "I can see <search input> has been input into the search field",
  () =>
    // Write code here that turns the phrase above into concrete actions
    "pending",
);
Then(
  "the search form is submitted",
  () =>
    // Write code here that turns the phrase above into concrete actions
    "pending",
);
