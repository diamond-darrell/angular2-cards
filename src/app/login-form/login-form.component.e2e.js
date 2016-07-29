const utils = require('../../../tests/test-utils');

describe('LoginFormComponent test', () => {
  beforeEach(() => {
    utils.visit('signin');
  });

  it('should has a title', () => {
    const title = utils.getElementByCss('h2');

    expect(title.isPresent()).toBe(true);
    expect(title.getText()).toBe('Please sign in');
  });

  it('should has a login input', () => {
    const loginInput = utils.getElementByCss('input[name="login"]');

    expect(loginInput.isPresent()).toBe(true);
    expect(loginInput.getAttribute('type')).toBe('text');
    expect(loginInput.getAttribute('placeholder')).toBe('Login');
  });

  it('should has a password input', () => {
    const passwordInput = utils.getElementByCss('input[name="password"]');

    expect(passwordInput.isPresent()).toBe(true);
    expect(passwordInput.getAttribute('type')).toBe('password');
    expect(passwordInput.getAttribute('placeholder')).toBe('Password');
  });

  it('should has a send form button', () => {
    const loginBtn = utils.getElementByCss('button[type="submit"]');

    expect(loginBtn.isPresent()).toBe(true);
    expect(loginBtn.getText()).toBe('Sign in');
  });

  it('should has ability to show password', () => {
    const passwordInput = utils.getElementByCss('input[name="password"]');
    const showPasswordBtn = utils.getElementByCss('.show-password');

    expect(passwordInput.getAttribute('type')).toBe('password');

    showPasswordBtn.click();

    expect(passwordInput.getAttribute('type')).toBe('text');
  });
});
