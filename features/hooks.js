const { AfterAll, After, Before } = require("@cucumber/cucumber");

const scope = require("./support/scope");

Before(async () => {
  // launch a new browser and open a new page
  const browser = await scope.driver.launch();
  scope.page = await browser.newPage();
  return null;
});

After(async (scenario) => {
  if (scenario.result === "failed") {
    await scope.page.screenshot({ path: `${scenario.name}.png` });
  }
  // Here we check if a scenario has instantiated a browser and a current page
  if (scope.browser && scope.context.currentPage) {
    // if it has, find all the cookies, and delete them
    const cookies = await scope.context.currentPage.cookies();
    if (cookies && cookies.length > 0) {
      await scope.context.currentPage.deleteCookie(...cookies);
    }
    // close the web page down
    await scope.context.currentPage.close();
    // wipe the context's currentPage value
    scope.context.currentPage = null;
  }
  return null;
});

AfterAll(async () => {
  // If there is a browser window open, then close it
  if (scope.browser) await scope.browser.close();
  return null;
});
