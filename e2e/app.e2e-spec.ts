import { NeteaseSamplePage } from './app.po';

describe('netease-sample App', function() {
  let page: NeteaseSamplePage;

  beforeEach(() => {
    page = new NeteaseSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
