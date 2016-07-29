const utils = require('../test-utils');
const { baseUrl } = utils;

describe('Navigation test', () => {
  it('should correctly visit home page', () => {
    utils.successSignIn();

    utils.visit('home');

    browser.getCurrentUrl().then(url => expect(url).toBe(`${baseUrl}/`));

    expect(utils.getElementByCss('home-screen').isPresent()).toBe(true);
  });

  it('should correctly visit board page', () => {
    utils.visit('board');

    browser.getCurrentUrl().then(url => expect(url).toBe(`${baseUrl}/board`));

    expect(utils.getElementByCss('cards-board').isPresent()).toBe(true);
  });

  it('should correctly visit signin page', () => {
    utils.signOut();
    utils.visit('signin');

    browser.getCurrentUrl().then(url => expect(url).toBe(`${baseUrl}/signin`));

    expect(utils.getElementByCss('login-form').isPresent()).toBe(true);
  });

  it('should show 404 error if user go to not existed page', () => {
    utils.visit('test');

    browser.getCurrentUrl().then(url => expect(url).toBe(`${baseUrl}/test`));

    expect(utils.getElementByCss('page-not-found').isPresent()).toBe(true);
  });
});
