import {browser, by, element} from 'protractor';

export class AngularMapboxGlPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavbarBrandText() {
    return element(by.css('app-root a.navbar-brand')).getText();
  }
}
