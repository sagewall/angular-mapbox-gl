import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display navbar-brand text', () => {
    page.navigateTo();
    expect(page.getNavbarBrandText()).toEqual('Angular Mapbox GL');
  });
});
