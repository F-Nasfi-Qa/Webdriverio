import { Given, When } from "@wdio/cucumber-framework";

/**
 * Alerts and popups feature
 */

Given("Main page is opened", async () => {
  await browser.url("");
  await browser.maximizeWindow();
});

When("Alerts and popups interactions", async () => {
  await $("=JavaScript Alerts").click();

  // 1.Open the Js alert
  await $("=Click for JS Alert").click();
  // if (await browser.isAlertOpen()) {
  //   await browser.acceptAlert();
  // }

  // 2.Open the Js confirm
  await $("=Click for JS Confirm").click();
  // if (await browser.isAlertOpen()) {
  //   await browser.dismissAlert();
  // }

  //await browser.debug();
});
