/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
const InvariantError = require('../InvariantError');

describe('InvariantError', () => {
  it('should create an error correctly', () => {
    // arrange and action
    const invariantError = new InvariantError('an error occurs');

    expect(invariantError.statusCode).toEqual(400);
    expect(invariantError.message).toEqual('an error occurs');
    expect(invariantError.name).toEqual('InvariantError');
  });
});
