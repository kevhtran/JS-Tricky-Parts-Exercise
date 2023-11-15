function createAccount(pin, amount = 0) {

    return {
        checkBalance(inputpin) {
            if (inputpin !== pin) {
                return "INVALID pin";
            }
            return `${amount}`

        },
        deposit(inputpin, money) {
            if (inputpin !== pin) {
                return "INVALID pin";
            }
            amount += money;
            return `Succesfully deposited $${money}. Current balance: $${amount}.`;
        }, withdraw(inputPin, money) {
            if (inputPin !== pin) return "INVALID PIN.";
            if (money > amount)
                return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            amount -= money;
            return `Succesfully withdrew $${money}. Current balance: $${amount}.`;
        },
        changePin(oldPin, newPin) {
            if (oldPin !== pin) return "INVALID PIN.";
            pin = newPin;
            return "PIN successfully changed!";
        }
    }
}

module.exports = { createAccount };
