"use strict"

class House {
  constructor(parameter) {
    this.address = parameter['address'];
    this.square_feet = parameter['square_feet'];
    this.num_bedrooms = parameter['num_bedrooms'] || 3;
    this.num_baths = parameter['num_baths'] || 2;
    this.cost = parameter['cost'] || 320000;
    this.down_payment = parameter['down_payment'] || 0.20;
    this.sold = parameter['sold'] || false;
    this.short_sale = parameter['short_sale'];
    this.has_tenants = parameter['has_tenants'] || false;
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit)
      this.sold = true
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${obscure_address} : ${square_feet} sq. ft., ${num_bedrooms} bed, ${num_baths} bath. ${cost}`
  }
}
