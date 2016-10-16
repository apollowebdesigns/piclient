import { PiclientPage } from './app.po';

describe('piclient App', function() {
  let page: PiclientPage;

  beforeEach(() => {
    page = new PiclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
