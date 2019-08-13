import UserAddress from './UserAddress';
import { formatDate } from '../utils/validate';

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

  static normalizeUser(user) {
    return {
      full_name: user.name,
      gender: user.userSex,
      email: user.email,
      password: user.password,
      password_confirmation: user.confirmationPassword,
      birth_date: formatDate(user.birthDate),
      ...UserAddress.normalizeAddress(user.userAddress)
    }
  }
}

export default User;
