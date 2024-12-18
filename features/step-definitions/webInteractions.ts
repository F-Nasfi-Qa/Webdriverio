import { Given, When } from "@wdio/cucumber-framework";
//import * as chai from "chai";

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
  /** 
   await $("a[href='/dropdown']").click();

  // 2.a Select by attribute
  let ddList = $("#dropdown");
  await ddList.selectByAttribute("value", "2");

  // 2.b Get a list of options
  let list = $$("#dropdown > option");
  let arr = [];
  for (let i = 0; i < (await list.length); i++) {
    let eleText = await list[i].getText();
    arr.push(eleText);
  }
    */

  // 3.Checkbox
  /** 
  await $("//*[@id='content']/ul/li[6]/a").click();
  
  // 3.a Select an option / assert if option selected
  let checkbox_1 = $("//*[@id='checkboxes']/input[2]");
  let isChecked = checkbox_1.isSelected();
  chai.expect(isChecked).to.be.false
   

  // 3.b Select all options
  let checkboxArr = $$("//*[@id='checkboxes']/input");
  for (let i = 0; i < (await checkboxArr.length); i++) {
    let checkboxEle = checkboxArr[i];
    if (!(await checkboxEle.isSelected())) {
      await checkboxEle.click();
    }
  }
   */
  await browser.debug();
});
