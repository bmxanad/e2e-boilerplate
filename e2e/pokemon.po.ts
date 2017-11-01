import {element, by, Key, browser} from 'protractor';
import {By} from 'selenium-webdriver';

export class PokemonPage {
  navigateTo() {
    return browser.driver.navigate().to("https://shop-dev.xyz");
  }

  getPokemonCardElements() {
    return element.all(by.css('.card--media'));
  }

  getFirstPokemonCardElement() {
    return browser.driver.findElement(By.css('.page-title'));
    // return element(by.css('.page-title'));
  }

  getOpenModalElement() {
    return element(by.tagName('app-pokemon-modal'));
  }

  getOpenModalHeadingElement() {
    return element(by.css('app-pokemon-modal h1'));
  }

  selectNextKey() {
    browser.actions().sendKeys(Key.ARROW_RIGHT).perform();
  }

  selectPrevKey() {
    browser.actions().sendKeys(Key.ARROW_LEFT).perform();
  }

  selectEscapeKey() {
    browser.actions().sendKeys(Key.ESCAPE).perform();
  }
}
