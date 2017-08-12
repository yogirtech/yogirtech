import { YogirtechPage } from './app.po';

describe('yogirtech App', () => {
  let page: YogirtechPage;

  beforeEach(() => {
    page = new YogirtechPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
