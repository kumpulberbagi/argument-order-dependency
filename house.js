"use strict"

class House {

  constructor(komponen_rumah) {
    this.address = komponen_rumah['address']
    this.square_feet = komponen_rumah['square_feet']
    this.num_bedrooms = komponen_rumah['num_bedrooms'] || 3
    this.num_baths = komponen_rumah['num_baths'] || 2
    this.cost = komponen_rumah['cost'] || 320000
    this.down_payment = komponen_rumah['down_payment'] || 0.20
    this.sold = komponen_rumah['sold'] || false
    this.short_sale = komponen_rumah['short_sale']
    this.has_tenants = komponen_rumah['has_tenants'] || false
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

var parameter = {
  address: "senayan",
  cost: 12000
};

var rumahSenayan = new House(parameter);
console.log(rumahSenayan.down_payment, rumahSenayan.has_tenants);
// var params = new House(test)
// console.log(params)
// var rumahku = new House(test);

// rumahku.down_payment = 12000;

// console.log(rumahku.down_payment());
