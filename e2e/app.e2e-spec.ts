import { Angular2GoogleChartsPage } from './app.po';

describe('angular2-google-charts App', function() {
  let page: Angular2GoogleChartsPage;

  beforeEach(() => {
    page = new Angular2GoogleChartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
