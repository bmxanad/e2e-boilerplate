import {browser} from 'protractor';
import {By} from 'selenium-webdriver';

export class BerlinskeShopPage {
  navigateTo() {
    return browser.driver.navigate().to("https://shop-dev.xyz");
  }

  getPageTitle() {
    return browser.driver.findElement(By.css('.page-title'));
  }
}
