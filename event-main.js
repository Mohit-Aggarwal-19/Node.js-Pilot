const PizzaOrder = require("./pizza-event.js");

const pizzaOrder = new PizzaOrder();

pizzaOrder.on("order-pizza", (size,topping)=>{
  console.log(`order is getting ready for ${topping} in ${size} size`);
});

pizzaOrder.on("order-pizza" ,(size)=>{
  if(size === 'Large'){
    console.log("you get a free drink");
  }
});

pizzaOrder.setPizzaOrder("Large","cheeze");


pizzaOrder.displayOrder();
