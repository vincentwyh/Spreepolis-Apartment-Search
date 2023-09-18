import { mietenPage } from "../pageObjects/mieten";

Feature('Spreepolis Mieten Page');

Scenario('User can see the same mieten page layout',  async ({ I }) => {
    I.amOnPage('https://www.spreepolis.berlin/mieten')
    I.waitForVisible(mietenPage.buttons.acceptCookies)
    I.click(mietenPage.buttons.acceptCookies)
    I.saveScreenshot("Spreepolis_Mieten_Image.png")
    I.seeVisualDiff("Spreepolis_Mieten_Image.png", {tolerance: 2, prepareBaseImage: false})
})
