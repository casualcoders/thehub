const { setWorldConstructor } = require("@cucumber/cucumber");
const puppeteer = require("puppeteer");
const scope = require("./support/scope");

const World = function myFunction() {
  scope.driver = puppeteer;
};

setWorldConstructor(World);
