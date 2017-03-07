import { AngularMapboxGlUpdatePage } from './app.po';

describe('angular-mapbox-gl-update App', () => {
  let page: AngularMapboxGlUpdatePage;

  beforeEach(() => {
    page = new AngularMapboxGlUpdatePage();
  });

  it('should have a nabvar brand of Angular Mapbox GL', () => {
    page.navigateTo();
    expect(page.getNavbarBrandText()).toEqual('Angular Mapbox GL');
  });
});
