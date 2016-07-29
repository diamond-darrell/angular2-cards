const utils = require('../test-utils');
const { baseUrl } = utils;

describe('Auth test', () => {
  beforeEach(() => {
    utils.visit('home');
  });

  it('should redirect to board route after signin', () => {
    utils.successSignIn();

    browser.getCurrentUrl().then(url => expect(url).toBe(`${baseUrl}/board`));
  });

  it('should redirect to home route if user is logged in', () => {
    utils.visit('signin');

    browser.getCurrentUrl().then(url => expect(url).toBe(`${baseUrl}/`));
  });

  it('should redirect to home route after signout', () => {
    utils.signOut();

    browser.getCurrentUrl().then(url => expect(url).toBe(`${baseUrl}/`));
  });

  it('should redirect to signin route if user is not logged in', () => {
    utils.visit('board');

    browser.getCurrentUrl().then(url => expect(url).toBe(`${baseUrl}/signin`));
  });

  it('should show error if user enter wrong credentials', () => {
    utils.visit('signin');
    utils.failSignIn();

    const alert = utils.getElementByCss('.alert-danger');
    const alertText = utils.getElementByCss('.alert-danger strong').getText();

    expect(alert.isPresent()).toBe(true);
    expect(alertText).toBe('Sign in failed!');
  });
});
