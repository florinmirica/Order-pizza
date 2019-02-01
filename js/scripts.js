
function Pizza(amount, size, toppings) {
    this.amount = amount;
    this.size = size;
    if (this.size === "large") {
        this.basePrice = 10;
    } else if (this.size === "extra large") {
        this.basePrice = 12;
    } else if (this.size === "medium") {
        this.basePrice = 8;
    } else if (this.size === "small") {
        this.basePrice = 6;
    } else {
        this.basePrice = 15;
    }


    if (toppings != undefined) {
        var allToppings = toppings;
    } else {
        allToppings = [];
    }
    this.toppings = allToppings;
}

Pizza.prototype.priceCalc = function() {
    var pizzaBasePrice = this.basePrice;
    var numberOfToppings = this.toppings.length;
    var toppingsPrice = numberOfToppings * .75;
    var amount = this.amount;
    var totalCost = amount * (pizzaBasePrice + toppingsPrice);
    return totalCost;
}



});
