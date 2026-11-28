class Paymentservice {
    deductAmount(paymentType, amount) {
        if (paymentType == "creditcard") {
            // Logic to process credit card payment
            console.log("Processing credit card payment of amount:", amount);
        } else if (paymentType == "debitcard") {
            // Logic to process debit card payment
            console.log("Processing debit card payment of amount:", amount);
        } else if (paymentType == "bitcoin") {
            // Logic to process bitcoin payment
            console.log("Processing bitcoin payment of amount:", amount);
        } else {
            console.log("Invalid payment type");
        }
    }
}

// Adding NetBanking would mean changing the existing code effectively violating OCP

interface PaymentMethod {
    processPayment(amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log("Processing credit card payment of amount:", amount);
    }
}

class DebitCardPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log("Processing debit card payment of amount:", amount);
    }
}

class PaymentServiceOCP {
    public paymentMethod: PaymentMethod;
    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    deductAmount(amount: number) {
        this.paymentMethod.processPayment(amount);
    }
}

const creditCardPayment = new CreditCardPayment();
// const bitcoinPayment = new BitcoinPayment();
const debitCardPayment = new DebitCardPayment();
const paymentService = new PaymentServiceOCP(creditCardPayment);
paymentService.deductAmount(1000);