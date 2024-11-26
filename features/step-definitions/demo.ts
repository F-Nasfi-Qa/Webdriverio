import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

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
