import { PokemonPage } from './pokemon.po';
import { browser } from 'protractor';

function sleep() {
  browser.driver.sleep(1500); // sleep for demonstration reasons
}

describe('ng-pokedex pokemon view', function () {
  let page: PokemonPage;

  beforeEach(() => {
    page = new PokemonPage();
  });

  it ('should display page title with text', () => {
    page.navigateTo();
    expect(page.getFirstPokemonCardElement().getText()).toBe('Home Page');
  });
});

