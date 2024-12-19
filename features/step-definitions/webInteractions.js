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

  // 4. Windows handling
  await $("//*[@id='content']/ul/li[33]/a").click();

  // 4.a Open another window, switch to the new window and switch back to the main widow
  //Open a new windows
  await $("=Click Here").click();
  await $("=Elemental Selenium").click();

  let currentWindowTitle = await browser.getTitle();
  let parentWindowHundle = await browser.getWindowHandle();
  console.log(`The current window title is: ${currentWindowTitle}`);

  //Swith to the new window
  let windowsHandles = await browser.getWindowHandles();
  for (let i = 0; i < windowsHandles.length; i++) {
    console.log(`Window handle: ${windowsHandles[i]}`);
    await browser.switchToWindow(windowsHandles[i]);
    currentWindowTitle = await browser.getTitle();

    if (currentWindowTitle === "Home | Elemental Selenium") {
      await browser.switchToWindow(windowsHandles[i]);
      let parentWindowHeaderTxt = await $("<h1>").getText();
      console.log(`>> The header text is: ${parentWindowHeaderTxt}`);
      break;
    }
  }

  //Switch back to the main window
  await browser.switchToWindow(parentWindowHundle);
  let parentWindowHeaderTxt = await $("<h3>").getText();
  console.log(`>> The parent window header is: ${parentWindowHeaderTxt}`);

  await browser.debug();
});
