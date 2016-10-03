"use strict"

class House {

  constructor(parameter) {
    this.address = parameter['address']
    this.square_feet = parameter['square_feet']
    this.num_bedrooms = parameter['num_bedrooms'] || 3
    this.num_baths = parameter['num_baths'] || 2
    this.cost = parameter['cost'] || 320000
    this.down_payment = parameter['down_payment'] || 0.20
    this.sold = parameter['sold'] || false
    this.short_sale = parameter['short_sale']
    this.has_tenants = parameter['has_tenants'] || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit)
      this.sold = true
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${obscure_address} : ${square_feet} sq. ft., ${num_bedrooms} bed, ${num_baths} baths ${cost}`
  }
}
var rumah = []
rumah['address'] = 'Jakarta city'
rumah['square_feet'] = 200
rumah['num_bedrooms']  = 4
rumah['num_baths'] = 2
rumah['cost'] = 25000000
rumah['down_payment'] = 0.2
rumah['sold'] = true
rumah['short_sale'] = true
rumah['has_tenants'] = true
var home = new House(rumah)
console.log(home);
console.log(home.hasOwnProperty('has_tenants'));
