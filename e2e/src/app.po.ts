import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getAchieveDreamText() {
    return element(by.css('h2')).getText();
  }

  getAchieveDreamCheckboxText() {
    return element(by.css('app-root h3')).getText();
  }

  enterAchieveDream(achieveDream: string) {
    element(by.id('achieve-dream-input')).sendKeys(achieveDream);
  }

  enterDream(dream: string) {
    element(by.id('dream-input')).sendKeys(dream);
  }

  toggleAchieveCheckbox() {
    element(by.id('achieve-check-dream-input')).click();
  }
}
