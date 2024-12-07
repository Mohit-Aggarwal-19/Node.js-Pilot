const EventEmitter = require("node:events")

class pizzaOrder extends EventEmitter{
  constructor(){
    super();
    this.pizzaOrder = 0;
  }

  setPizzaOrder(size,toppings){
    this.pizzaOrder++;
    this.emit("order-pizza", size, toppings);
    // this.emit("order-pizza", size);
  }

  displayOrder(){
    console.log("Count",this.pizzaOrder)
  }

}

module.exports = pizzaOrder