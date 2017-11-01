import { BerlinskeShopPage } from './berlinske-shop-po';

describe('ng-pokedex pokemon view', function () {
  let page: BerlinskeShopPage;

  beforeEach(() => {
    page = new BerlinskeShopPage();
  });

  it ('should display page title with text', () => {
    page.navigateTo();
    expect(page.getPageTitle().getText()).toBe('Home Page');
  });
});

