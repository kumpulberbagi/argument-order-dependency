"use strict"

class House {

  constructor(components) {
    this.address = components['address']
    this.square_feet = components['square_feet']
    this.num_bedrooms = components['num_bedrooms'] || 3
    this.num_baths = components['num_baths'] || 2
    this.cost = components['cost']  || 320000
    this.down_payment = components['down_payment'] || 0.20
    this.sold = components['sold'] || false
    this.short_sale = components['short_sale']
    this.has_tenants = components['has_tenants'] || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit)
      this.sold = true
  }

  dp() {
    return this.cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. $ ${this.cost}`
    // return `${obscure_address()} : ${square_feet} sq. ft., ${num_bedrooms} bed, ${num_baths} bath. ${cost}`
  }
}

var componentRumah = {
  address : "jalan merdeka 10 Blok C Jakarta Pusat",
  square_feet : 20,
  num_bedrooms : 5,
  num_baths : 3,
  cost : 50000,
  down_payment : 0.3,
  sold : false,
  short_sale : true,
  has_tenants : false
}

var rumah = new House(componentRumah)
console.log(rumah.to_s())
