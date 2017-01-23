import { AngularMapboxGlPage } from './app.po';

describe('angular-mapbox-gl App', function() {
  let page: AngularMapboxGlPage;

  beforeEach(() => {
    page = new AngularMapboxGlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
