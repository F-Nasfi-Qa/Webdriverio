import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

/**
 * Demo Feature
 */

Given("Google page is opened", async () => {
  console.log("Before opening browser");
  await browser.url("https://www.google.com");
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
  chai.expect(browser.getUrl()).to.equal(expectedUrl);
});

/**
 * Web Interactions Feature
 */

Given("A web page is opened", async () => {
  await browser.url("");
  await browser.maximizeWindow();
});

When("Performs a web interactions", async () => {
  // 1. Inputs box
  /**
   * await $("a[href='/inputs']").click()
   * await $("input[type=number]").setValue(1234);
   */

  // 2. Dropdown
  await $("a[href='/dropdown']").click();
  let ddList = $("#dropdown");
  await ddList.selectByAttribute("value", "2");

  // 3. Get a list of options
  let list = $$("#dropdown > option");
  let arr = [];
  for (let i = 0; i < await list.length; i++) {
    let eleText = await list[i].getText();
    arr.push(eleText);
    console.log(eleText);
  }

  console.log(`>> Options list: ${arr}`);
});

