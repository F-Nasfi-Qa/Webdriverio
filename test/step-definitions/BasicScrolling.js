import { Given, When } from "@wdio/cucumber-framework";
import * as chai from "chai";
import { browser, $ } from "@wdio/globals";

/**
 * Alerts and popups feature
 */

// Variables declarations
let expectedUrl = "https://www.amazon.com.au/";
let elementToView = $("=Conditions of Use & Sale");

Given(`Basic scrolling page opened`, async () => {
  await browser.url("/");
  await browser.maximizeWindow();

  chai.expect(await browser.getUrl()).to.equal(expectedUrl);
});

When(`Basic scrolling interactions`, async () => {
  elementToView.scrollIntoView(false);
  await browser.pause(2000);
});
