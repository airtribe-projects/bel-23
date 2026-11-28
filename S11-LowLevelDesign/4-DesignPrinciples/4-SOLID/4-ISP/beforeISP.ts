interface PaymentProcessor {
    processCreditCard(amount: number): void;
    processDebitCard(amount: number): void;
    processPayPal(amount: number): void;
    processBankTransfer(amount: number): void;  
}


// MDR: 2%
//@ts-ignore
class RazorPayProcessor implements PaymentProcessor {
    processCreditCard(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
    processDebitCard(amount: number): void {
        console.log(`Processing debit card payment of $${amount}`);
    }
    
    processPayPal(amount: number): void {
        console.log(`Processing Paypal payment of $${amount}`);
    }

    processBankTransfer(amount: number): void {
        console.log(`Processing Paypal payment of $${amount}`);
    }
}
//@ts-ignore
class SBIGateway implements PaymentProcessor{
    processCreditCard(amount: number): void {
        throw new Error("Method not implemented.");
    }
    processDebitCard(amount: number): void {
        throw new Error("Method not implemented.");
    }
    processPayPal(amount: number): void {
        throw new Error("Method not implemented.");
    }
    processBankTransfer(amount: number): void {
        console.log("Processing NetBanking Payment");
    }

}




