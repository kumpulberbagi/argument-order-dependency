"use strict"

class House {

  constructor(property) {
    this.address = property['address']
    this.square_feet = property['square_feet']
    this.num_bedrooms = property['num_bedrooms'] || 3
    this.num_baths = property['num_baths'] || 2
    this.cost = property['cost'] || 320000
    this.down_payment = property['down_payment']|| 0.20
    this.sold = property['sold'] || false
    this.short_sale = property['short_sale']
    this.has_tenants = property['has_tenants'] || false
  }


  // constructor(components){
  //   this.address = components['address']
    // square_feet = components
    // num_bedrooms = components || 3
    // num_baths = components || 2
    // cost = components || 32000
    // down_payment = components || 0.20
    // sold = components || false
    // short_sale = components
    // has_tenants = components || false

  //}

  obscure_address() {
    return ` Alamat : ${this.address.replace(/.{5}/g, '****')}`
  }

  buy(money, cicilan) {
    if(money >= this.cost || cicilan * 12 >= this.cost){
      this.sold = true
      return `Rumah terjual`
    }
    return `Harga rumah : ${this.cost}, Uang yg diberikan : ${money}. Rumah tidak terjual`
  }

  dp() {
    return `Minimum DP : ${this.cost * this.down_payment}`
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost} $`
  }
}



var rumah = new House({cost:50000, down_payment: 0.5, address: "Jakarta", square_feet: 120, short_sale: 50})
console.log(rumah.obscure_address());
console.log(rumah.dp());
console.log(rumah.buy(5000, 100));
console.log(rumah.to_s());
