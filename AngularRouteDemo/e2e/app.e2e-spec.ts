import { AngularRouteDemoPage } from './app.po';

describe('angular-route-demo App', () => {
  let page: AngularRouteDemoPage;

  beforeEach(() => {
    page = new AngularRouteDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
