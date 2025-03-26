// Strategy Interface
class PaymentStrategy {
    pay(amount) {
        throw new Error("Must be implementedby concrete strategy");
    }
}

// Concrete strategies
class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying $${amount} via credit card`)
    }
}

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paying $${amount} via PayPal`)
    }
}

// Context
class ShoppingCart {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    setPaymentStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    checkout(amount) {
        this.paymentStrategy.pay(amount);
    }
}

// Client Code

const cart = new ShoppingCart(new CreditCardPayment());
cart.checkout(100);

cart.setPaymentStrategy(new PayPalPayment());
cart.checkout(75);