"use strict"

class House {

  constructor(arg) {
    this.address = arg['address']
    this.square_feet = arg['square_feet']
    this.num_bedrooms = arg['num_bedrooms'] || 3
    this.num_baths = arg['num_baths'] || 2
    this.cost = arg['cost'] || 320000
    this.down_payment = arg['down_payment'] || 0.20
    this.sold = arg['sold'] || false
    this.short_sale = arg['short_sale']
    this.has_tenants = arg['has_tenants'] || false
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

var house = []
house['square_feet'] = 200
house['sold'] = false
house['address'] = 'Pondok Indah'
house['num_bedrooms'] = 2
house['num_baths'] = 2
house['cost'] = 255000
house['down_payment'] = 0.20
house['short_sale'] = true
house['has_tenants'] = true
let rumah = new House(house)
console.log(rumah);
