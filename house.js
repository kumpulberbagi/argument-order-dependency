"use strict"
//Release 0
class House {

  constructor(args) {
    this.address = args['address']
    this.square_feet = args['square_feet']
    this.num_bedrooms = args['num_bedrooms'] || 3
    this.num_baths = args['num_baths'] || 2
    this.cost = args['cost'] || 320000
    this.down_payment = args['down_payment'] || 0.20
    this.sold = args['sold'] || false
    this.short_sale = args['short_sale']
    this.has_tenants = args['has_tenants'] || false
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

var data_rumah = []
data_rumah['address'] = 'Jakarta city'
data_rumah['square_feet'] = 200
data_rumah['num_bedrooms']  = 2
data_rumah['num_baths'] = 1
data_rumah['cost'] = 235000
data_rumah['down_payment'] = 0.15
data_rumah['sold'] = true
data_rumah['short_sale'] = true
data_rumah['has_tenants'] = true

var rumah = new House(data_rumah)
console.log(rumah)
