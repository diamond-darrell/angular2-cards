import { getApiUrl } from 'utils/get-api-url';

describe('GetApiUrl util test', () => {
  let ENV;

  beforeEach(() => {
    ENV = window.ENV;
    window.ENV = 'test';
  });

  afterEach(() => {
    window.ENV = ENV;
  });

  it('Function getApiUrl should return url to api', () => {
    const base = location.origin;
    const fixtures = [
      {
        input: ['rows'],
        expected: `${base}/rows/`,
      },
      {
        input: ['rows', 1],
        expected: `${base}/rows/1`,
      },
      {
        input: ['cards'],
        expected: `${base}/cards/`,
      },
      {
        input: ['cards', 1],
        expected: `${base}/cards/1`,
      },
      {
        input: ['rows-expanded'],
        expected: `${base}/rows?_embed=cards`,
      },
    ];

    fixtures.forEach(({ input, expected }) => {
      expect(getApiUrl(...input)).toBe(expected);
    });
  });

  it('Function getApiUrl can throw error if invalid url was received', () => {
    expect(getApiUrl).toThrowError();
  });
});
