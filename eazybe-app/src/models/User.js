import UserAddress from './UserAddress';

class User {
  constructor(name = undefined, birthDate = undefined, userSex = undefined, email = undefined, password = undefined, userAddress = new UserAddress()) {
    this.name = name;
    this.birthDate = birthDate;
    this.userSex = userSex;
    this.email = email;
    this.password = password;
    this.confirmationPassword = confirmationPassword;
    this.userAddress = userAddress;
  }
}

export default User;
