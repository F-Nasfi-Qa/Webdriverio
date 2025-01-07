import { Given, When } from "@wdio/cucumber-framework";

/**
 * File upload feature
 */

Given("File upload page is opened", async () => {
  await browser.url("");
  await browser.maximizeWindow();
});

When("File upload interactions", async () => {
  await $("=File Upload").click();
});
