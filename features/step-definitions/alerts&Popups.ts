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
});
