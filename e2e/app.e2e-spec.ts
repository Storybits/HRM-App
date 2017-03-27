import { HrmPage } from './app.po';

describe('hrm App', () => {
  let page: HrmPage;

  beforeEach(() => {
    page = new HrmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
