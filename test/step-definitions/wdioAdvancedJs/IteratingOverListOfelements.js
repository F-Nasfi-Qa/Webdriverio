import { Given, Then } from "@cucumber/cucumber";
import * as chai from "chai";
import { browser, $ } from "@wdio/globals";

/**
 * Iterating over list of elements
 */

// Variables declarations
let expectedURL = "https://www.saucedemo.com/inventory.html";

let userNameField = $('//*[@id="user-name"]');
let passwordField = $('//*[@id="password"]');
let loginBtn = $('//*[@id="login-button"]');

Given(`Login to inventory web app`, async () => {
  /** 1. Open inventory web app */
  await browser.url("https://www.saucedemo.com/");
  //await browser.maximizeWindow();

  /** 2. Login to inventory web app */
  await userNameField.setValue("standard_user");
  await passwordField.setValue("secret_sauce");
  await loginBtn.click();

  chai.expect(await browser.getUrl()).to.equal(expectedURL);
});

Then(`Inventory page should list {int}`, async (nbrOfProducts) => {
  if (!nbrOfProducts) throw Error(`Invalid number provided: ${nbrOfProducts}`);

  let listOfProducts = await $$("div.inventory_item_name");

  chai.expect(listOfProducts.length).to.equal(nbrOfProducts);
});

Then(`Validate all products have valid price greater than 0`, async () => {
  /** 1. Get prices list */
  let eleArr = await $$(".inventory_item_price");
  let listOfProductPrices = [];
  for (let i = 0; i < eleArr.length; i++) {
    let productPrice = await eleArr[i].getText();
    listOfProductPrices.push(productPrice);
  }

  console.log(`>> Positive prices with $: ${listOfProductPrices}`);

  /** 2. Convert string to number */
  let listOfPricesWithNbr = listOfProductPrices.map((ele) => parseFloat(ele.replace("$", "")));
  console.log(`>> Prices in numbers: ${listOfPricesWithNbr}`);

  /** 3. Assert if any value is <=0 */
  let invalidPricesArr = listOfPricesWithNbr.filter((ele) => ele <= 0);
  chai.expect(invalidPricesArr.length).to.equal(0);

  console.log(`>> Invalid prices: ${invalidPricesArr}`);
});
