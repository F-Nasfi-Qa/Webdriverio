import { Given, Then } from "@cucumber/cucumber";
import * as chai from "chai";
import { browser, $ } from "@wdio/globals";

/**
 * Iterating over list of elements
 */

// Variables declarations
let expectedURL = "https://www.saucedemo.com/inventory.html/";
let userNameField = $('//*[@id="user-name"]');
let passwordField = $('//*[@id="password"]');
let loginBtn = $('//*[@id="login-button"]');

Given(`Login to inventory web app`, async () => {
  /** 1. Open inventory web app */
  await browser.url("https://www.saucedemo.com/");
  await browser.maximizeWindow();

  /** 2. Login to inventory web app */
  await userNameField.setValue("standard_user");
  await passwordField.setValue("secret_sauce");
  await loginBtn.click();

  chai.expect(await browser.getUrl()).to.equal(expectedURL);
});

Then(`Inventory page should list {int}`, async () => {
  // [Then] Describes the expected outcome or result of the scenario.
});

Then(`Validate all products have valid pric (price > 0)`, async () => {
  // [Then] Describes the expected outcome or result of the scenario.
});
