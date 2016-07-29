function getUrl(url = 'home') {
  switch (url) {
    case 'home':
      return '/';
    case 'board':
      return '/board';
    case 'signin':
      return '/signin';
    default:
      return `/${url}`;
  }
}

function visit(url) {
  browser.get(getUrl(url));
}

function signIn(login, password) {
  visit('signin');

  const loginInput = element(by.css('input[name="login"]'));
  const passwordInput = element(by.css('input[name="password"]'));
  const loginBtn = element(by.css('button[type="submit"]'));

  loginInput.sendKeys(login);
  passwordInput.sendKeys(password);
  loginBtn.click();
}

function getElementByCss(selector) {
  return element(by.css(selector));
}

function successSignIn() {
  signIn('Test', 'angular2');
}

function failSignIn() {
  signIn('test', 'test');
}

function signOut() {
  const signOutLink = element(by.css('.signout-link'));

  signOutLink.click();
}

const baseUrl = 'http://localhost:8080';

module.exports = {
  getUrl,
  baseUrl,
  visit,
  getElementByCss,
  signOut,
  successSignIn,
  failSignIn,
};
