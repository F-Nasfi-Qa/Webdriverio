import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

/**
 * Demo Feature
 */

Given("Google page is opened", async () => {
  console.log("Before opening browser");
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  await browser.maximizeWindow();
  console.log("After opening browser");
});

When("Search with {string}", async (searchItem) => {
  console.log(`>> searchItem: ${searchItem}`);
  await $("[name=q]").setValue(searchItem);
  await browser.keys("Enter");
});

Then("click on first search result", async () => {
  await $("<h3>").click();
});

Then("URL should match with {string}", async (expectedUrl) => {
  console.log(`>> expectedUrl: ${expectedUrl}`);
  chai.expect(browser.getUrl(), expectedUrl);
});

/**
 * Web Interactions Feature
 */

Given("A web page is opened", async () => {
  await browser.url("https://the-internet.herokuapp.com/inputs");
  await browser.maximizeWindow();
});

When("Performs a web interactions", async () => {
  /**
   * 1. Inputs box
   * Actions:
   * 1. Type into input box
   * 2. Clear the field and type or just add value
   * 3. Click and type
   * 4. Slow typing
   */

  $('input[type=number]').setValue("1234")
})
