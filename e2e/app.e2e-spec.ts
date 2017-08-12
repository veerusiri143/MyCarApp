import { MyCarAppPage } from './app.po';

describe('my-car-app App', () => {
  let page: MyCarAppPage;

  beforeEach(() => {
    page = new MyCarAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
