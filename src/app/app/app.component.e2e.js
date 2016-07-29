const { visit, getElementByCss } = require('../../../tests/test-utils');

describe('App', () => {
  beforeEach(() => {
    visit('home');
  });

  it('should have a header', () => {
    const subject = getElementByCss('header').isPresent();

    expect(subject).toBe(true);
  });

  it('should have a main', () => {
    const subject = getElementByCss('main');

    expect(subject.isPresent()).toBe(true);
    expect(subject.getAttribute('class')).toBe('container');
  });

  it('should have a navbar', () => {
    const subject = getElementByCss('nav-bar');

    expect(subject.isPresent()).toBe(true);
  });
});
