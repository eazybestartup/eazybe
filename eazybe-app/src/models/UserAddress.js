class UserAddress {
  constructor(cep = undefined, address = undefined, number = undefined, district  = undefined, complement = undefined, city = undefined, uf = undefined) {
    this.cep = cep;
    this.address = address;
    this.number = number;
    this.district = district;
    this.complement = complement;
    this.city = city;
    this.uf = uf;
  }
}

export default UserAddress;
