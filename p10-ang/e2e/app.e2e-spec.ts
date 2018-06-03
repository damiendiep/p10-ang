import { P10AngPage } from './app.po';

describe('p10-ang App', function() {
  let page: P10AngPage;

  beforeEach(() => {
    page = new P10AngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
