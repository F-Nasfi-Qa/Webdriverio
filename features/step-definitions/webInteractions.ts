import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

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
   // 2.a Select by attribute
  await $("a[href='/dropdown']").click();
  let ddList = $("#dropdown");
  await ddList.selectByAttribute("value", "2");

   // 2.b Get a list of options
  let list = $$("#dropdown > option");
  let arr = [];
  for (let i = 0; i < (await list.length); i++) {
    let eleText = await list[i].getText();
    arr.push(eleText);
  }
});
