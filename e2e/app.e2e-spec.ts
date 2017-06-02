import { AngularMapboxGlPage } from './app.po';

describe('angular-mapbox-gl App', () => {
  let page: AngularMapboxGlPage;

  beforeEach(() => {
    page = new AngularMapboxGlPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getNavbarBrandText()
      .then(msg => expect(msg).toEqual('Angular Mapbox GL'))
      .then(done, done.fail);
  });
});
