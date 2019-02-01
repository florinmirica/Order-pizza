//Business Logic

function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
}

Pizza.prototype.cost = function() {
  var cost = parseFloat(this.size) * 1;
  cost += (this.toppings.length) * 0.5;
  if (this.toppings.includes("Bacon")) {
    cost += 0.5
  }
  return cost;
}

//User interface Logic
