import { Given, When } from "@wdio/cucumber-framework";
import * as chai from "chai";

/**
 * File upload feature
 */

Given("File upload page is opened", async () => {
  let expectedUrl = "https://the-internet.herokuapp.com/upload";

  await browser.url("/upload");
  await browser.maximizeWindow();

  chai.expect(await browser.getUrl()).to.equal(expectedUrl);
});

When("File upload interactions", async () => {
  let pathTextFileToDownload = `${process.cwd()}/data/fileToUpload/wallpaperflare.com_wallpaper.jpg`;
  let fileName = pathTextFileToDownload.slice(95);
  
  await $("#file-upload").addValue(pathTextFileToDownload);
  await $("#file-submit").click();

  chai.expect(await $("#uploaded-files").getText()).to.equal(fileName);

  //await browser.debug();
});
