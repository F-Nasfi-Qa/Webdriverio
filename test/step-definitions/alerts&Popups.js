import { Given, When } from "@wdio/cucumber-framework";
import * as chai from "chai";
/**
 * Alerts and popups feature
 */

Given("Alerts and popups page is opened", async () => {
  let expectedUrl = "https://the-internet.herokuapp.com/";

  await browser.url("");
  await browser.maximizeWindow();

  chai.expect(await browser.getUrl()).to.equal(expectedUrl);
});

When("Alerts and popups interactions", async () => {
  await $("=JavaScript Alerts").click();

  // 1.Open the Js alert
  await $("=Click for JS Alert").click();
  if (await browser.isAlertOpen()) {
    await browser.acceptAlert();
  }

  // 2.Open the Js confirm
  await $("=Click for JS Confirm").click();
  if (browser.isAlertOpen()) {
    await browser.dismissAlert();
  }

  // 3.Open the Js prompt
  await $("=Click for JS Prompt").click();
  if (browser.isAlertOpen()) {
    await browser.dismissAlert();
  }

  await browser.debug();
});
