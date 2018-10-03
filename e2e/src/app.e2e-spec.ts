import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display dream message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('I have a dream!');
  });
});
