/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const ClientError = require('../ClientError');

describe('ClientError', () => {
  it('should throw error when directly use it', () => {
    expect(() => new ClientError('')).toThrowError(
      'cannot instantiate abstract class'
    );
  });
});
