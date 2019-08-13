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

  static normalizeAddress(address) {
    return {
      street: address.address,
      neighborhood: address.district,
      cep: address.cep,
      number: address.number,
      complement: address.complement,
      city: address.city,
      state: address.uf,
    }
  }
}

export default UserAddress;
