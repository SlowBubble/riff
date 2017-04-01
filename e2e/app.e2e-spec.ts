import { SlowriffPage } from './app.po';

describe('slowriff App', () => {
  let page: SlowriffPage;

  beforeEach(() => {
    page = new SlowriffPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
