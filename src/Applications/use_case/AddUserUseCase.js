/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
const RegisterUser = require('../../Domains/users/entities/RegisterUser');

class AddUserUseCase {
  constructor({ userRepository, passwordHash }) {
    this._userRepository = userRepository;
    this._passwordHash = passwordHash;
  }

  async execute(useCasePayload) {
    const registerUser = new RegisterUser(useCasePayload);
    // verifyAvailableUsername still abstrack
    await this._userRepository.verifyAvailableUsername(registerUser.username);
    // hash() still abstrack
    registerUser.password = await this._passwordHash.hash(
      registerUser.password
    );
    // addUser() still abstrack
    return this._userRepository.addUser(registerUser);
  }
}

module.exports = AddUserUseCase;
