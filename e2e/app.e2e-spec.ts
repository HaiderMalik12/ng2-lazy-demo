import { NgLazyDemoPage } from './app.po';

describe('ng-lazy-demo App', () => {
  let page: NgLazyDemoPage;

  beforeEach(() => {
    page = new NgLazyDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
