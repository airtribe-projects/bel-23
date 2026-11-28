

interface CardProcessor {
    processCreditCard(amount: number): void;
    processDebitCard(amount: number): void;
}

interface BankProcessor {
   processBankTransfer(amount: number): void;
}

interface PaypalProcessor {
    processPayPal(amount: number): void;
}



// @ts-ignore
class RazorPayProcessor implements CardProcessor, BankProcessor, PaypalProcessor {    
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

// @ts-ignore
class SBIGateway implements BankProcessor{

    processBankTransfer(amount: number): void {
        console.log("Processing NetBanking Payment");
    }

}




