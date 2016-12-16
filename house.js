"use strict"

class House {
  // constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, has_tenants) {
  //   this.address = address
  //   this.square_feet = square_feet
  //   this.num_bedrooms = num_bedrooms || 3
  //   this.num_baths = num_baths || 2
  //   this.cost = cost || 320000
  //   this.down_payment = down_payment || 0.20
  //   this.sold = sold || false
  //   this.short_sale = short_sale
  //   this.has_tenants = has_tenants || false
  // }
// Bisa di Ubah Menjadi Seperti Bawah ini
constructor(params){
  this.address = params['address']
  this.square_feet = params['square_feet']
  this.num_bedrooms = params['num_bedrooms'] || 3
  this.num_baths = params['num_baths'] || 2
  this.cost = params['cost'] || 32000
  this.down_payment = params['down_payment'] || 0.2
  this.sold = params["sold"] || false
  this.short_sale = params ["short_sale"]
  this.has_tenants = params["has_tenants"] || false
}

  obscure_address() {
    return this.address.replace(/.{3}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit){
      return this.sold = true;
    }else{
      return this.sold = false;
    }
  }

  DP() {
    return this.cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}


var isi = {
  cost:10000,
  down_payment: 0.5,
  address:"Jakarta Indonesia Kode Pos 277017",
  square_feet: 150,
  short_sale: 60
}
var villa = new House(isi)
// Atau Bisa  Di Buat Seperti diwabah ini
//var villa = new House({cost:50000, down_payment: 0.5, address: "Jakarta", square_feet: 120, short_sale: 50})

console.log(villa.obscure_address());
console.log(villa.buy(5000,1));
console.log(villa.DP());
console.log(villa.to_s());
