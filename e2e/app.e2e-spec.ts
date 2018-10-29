import { MarketPlacePage } from './app.po';

describe('market-place App', () => {
  let page: MarketPlacePage;

  beforeEach(() => {
    page = new MarketPlacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
