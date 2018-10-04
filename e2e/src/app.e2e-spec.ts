import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display dream message', () => {
    expect(page.getParagraphText()).toEqual('I have a dream!');

    page.enterDream('I want to eat apples!');

    expect(page.getParagraphText()).toEqual('I have a dream! I want to eat apples!');
  });

  it('should display achieve dream message', () => {
    expect(page.getAchieveDreamText()).toEqual('I want to achieve my dream by');

    page.enterAchieveDream('setting up goals!');

    expect(page.getAchieveDreamText()).toEqual('I want to achieve my dream by setting up goals!');
  });

  it('should check if checkbox is checked', () => {
    expect(page.getAchieveDreamCheckboxText()).toEqual('Achieve Dream Checkbox false');

    page.toggleAchieveCheckbox();

    expect(page.getAchieveDreamCheckboxText()).toEqual('Achieve Dream Checkbox true');
  });
});
