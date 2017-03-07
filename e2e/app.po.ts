import { browser, element, by } from 'protractor';

export class AngularMapboxGlUpdatePage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarBrandText() {
    return element(by.css('app-root a.navbar-brand')).getText();
  }
}
