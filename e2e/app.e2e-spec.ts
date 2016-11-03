import { CfpPwaPage } from './app.po';

describe('cfp-pwa App', function() {
  let page: CfpPwaPage;

  beforeEach(() => {
    page = new CfpPwaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
