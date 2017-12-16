import { AngularMapboxGlPage } from './app.po';

describe('angular-mapbox-gl App', () => {
  let page: AngularMapboxGlPage;

  beforeEach(() => {
    page = new AngularMapboxGlPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getNavbarBrandText()).toEqual('Angular Mapbox GL');
  });
});
