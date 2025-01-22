import { Given, When } from "@wdio/cucumber-framework";
import * as chai from "chai";
import { browser, $ } from "@wdio/globals";
import { Key } from "webdriverio";

/**
 * Frames interactions feature
 */

//Variables declarations
// let expectedUrl = "https://the-internet.herokuapp.com/frames";
// let iFramesBtn = $("=iFrame");
// let iFrame = $("#mce_0_ifr");
// let paragraphBody_iFrame = $("#tinymce");

Given(`Frames page is opened`, async () => {
  await browser.url("https://en.wikipedia.org/wiki/Amazon_(company)");
  await browser.maximizeWindow();

  //chai.expect(await browser.getUrl()).to.equal(expectedUrl);
});

// 1.Switch to iFrame
//Given(`iFrames is opened and switch to it`, async () => {
//await iFramesBtn.click();

//await browser.switchFrame(iFrame);

//await paragraphBody_iFrame.setValue(`Typing into frame...`);

//await browser.switchToParentFrame();
//});

When(`Keys interactions`, async () => {
  await $("#searchInput").addValue("amazon");

  await $("//*[@id='searchform']/div/div/div[1]").click(); // Selectionner la barre de recherche dans wikipedia

  await browser.keys([Key.Control, "A"]);

  await browser.keys([Key.Control, "X"]);

  await browser.keys([Key.Control, "V"]);

  await browser.keys(Key.Enter);

  await browser.pause(2000);
});
