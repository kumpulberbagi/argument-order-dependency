"use strict"

class Car {

  start_car(options) {
    console.log(options)
    if (options && options.hasOwnProperty('headlights'))
      this.headlights = options['headlights']
    else
      this.headlights = true

    if (options && options['gear'])
      this.gear = options['gear']
    else
      this.gear = 1
  }
}

var herbie = new Car

// When we start the car, the headlights should be on by default
herbie.start_car()
console.log(herbie.headlights) // true

// But what happens when we want to start without headlights?
herbie.start_car({headlights: "lampu"})
console.log(herbie.headlights) // true ...KOK BISA?!
