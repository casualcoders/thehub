const { After, Before } = require("@cucumber/cucumber");

const scope = require("./support/scope");

Before(async () => {
  // launch a new browser and open a new page
  scope.browser = await scope.driver.launch();
  scope.page = await scope.browser.newPage();
  return null;
});

After(async (scenario) => {
  if (scenario.result === "failed") {
    await scope.page.screenshot({ path: `${scenario.name}.png` });
  }
  // Here we check if a scenario has instantiated a browser and a current page
  if (scope.browser && scope.page) {
    // if it has, find all the cookies, and delete them
    const cookies = await scope.page.cookies();
    if (cookies && cookies.length > 0) {
      await scope.page.deleteCookie(...cookies);
    }
    // wipe the context's currentPage value
    scope.page = null;
  }

  // close the web page down
  if (scope.browser) await scope.browser.close();
  return true;
});
