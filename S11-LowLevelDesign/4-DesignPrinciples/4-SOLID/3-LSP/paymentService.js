class PaymentMethod {
    processPayment(amount) {
        console.log(`Processing payment of ₹${amount}`);
    }
}

class CreditCardPayment extends PaymentMethod {
    processPayment(amount) {
        console.log(`Charged ₹${amount} to credit card`);
    }
}

class DebitCardPayment extends PaymentMethod {
    processPayment(amount) {
        console.log(`Charged ₹${amount} to debit card`);
    }
}
// PM --> GiftCardPayment

// class GiftCardPayment extends PaymentMethod {
//     constructor(balance) {
//         super();
//         this.balance = balance;
//     }

//     processPayment(amount) {
//         if (amount > this.balance) {
//             throw new Error("Gift card balance insufficient");
//         }

//         this.balance -= amount;
//         console.log(`Paid ₹${amount} using Gift Card`);
//     }
// }

class OrderService {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    createOrder(order) {
        console.log("Order Created");
        this.paymentMethod.processPayment(order.amount);
    }
}


// Downstream code
const paymentCC = new CreditCardPayment();
const payment = new GiftCardPayment(50);
// Old Code
const order1 = new OrderService(paymentCC);
order.createOrder({ amount: 100 });  // Error


const order = new OrderService(payment);
order.createOrder({ amount: 100 });

