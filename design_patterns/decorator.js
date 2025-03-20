// Component Interface
class Coffee {
    cost() {
        throw new Error("This method should be implemented by the concrete class");
    }
}

// Concrete Component
class SimpleCoffee extends Coffee {
    cost() {
        return 5;
    }
}

// Decorator Class
class CoffeeDecorator extends Coffee {
    constructor(coffee) {
        super();
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost();
    }
}

// Concrete Decorator
class MilkDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 2;
    }
}
// Concrete Decorator
class SugarDecorator extends CoffeeDecorator {
    cost() {
        return this.coffee.cost() + 1;
    }
}

let coffee = new SimpleCoffee();
console.log(`Cost of simple coffee: $${coffee.cost()}`);

coffee = new MilkDecorator(coffee);
console.log(`Cost of milk coffee: $${coffee.cost()}`);

coffee = new SugarDecorator(coffee);
console.log(`Cost of milk and sugar coffee: $${coffee.cost()}`);
