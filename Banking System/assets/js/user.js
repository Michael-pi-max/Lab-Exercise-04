import utils from "./utilities.js";

export function User(username, accountNumber, currentBalance,bankBranch, interest = true){
    this.username = username,
    this.accountNumber = accountNumber,
    this.currentBalance = currentBalance,
    this.bankBranch = bankBranch,
    this.interest = interest,
    this.history = [],
    this.balance = ()=>{
        return `Your currentBalance is ${this.currentBalance}`;
    },
    this.deposit = (amount) => {
        let ownerBank;
        if(isNaN(amount)){
            return 'Invalid input'
        }else{
            this.currentBalance += amount;

            if(this.interest){
                ownerBank = utils.banks.filter((bank) => this.bankBranch === bank.name)[0];
                this.currentBalance += Number.parseInt((ownerBank.interestRate * amount)/100)
            }
            this.history.push(`+ ${amount}`);
            if(this.interest){
                this.history.push(`+ ${(ownerBank.interestRate * amount)/100}`)
            }
            return `You have successfully deposited ${amount} and your current balance is ${this.currentBalance}`;
        }
    },
    this.withdraw = (amount) => {
        if(this.currentBalance - amount > 20){
            this.currentBalance -= amount;
            this.history.push(`- ${amount}`)
            return `You have successfully withdrawn ${amount} and your current balance is ${this.currentBalance}`
        }else{
            return `Please Charge your balance`
        }
    },
    this.transfer = (amountToTransfer, receiver) => {
        let accountNumbers = utils.users.map((user) => user.accountNumber);
        if(accountNumbers.includes(receiver)){
            let accountMatch = utils.users.filter((user) => user.accountNumber === receiver)[0];
            if(accountMatch.bankBranch === this.bankBranch){
                if(this.currentBalance - amountToTransfer > 20){
                    this.currentBalance -= amountToTransfer;
                    accountMatch.currentBalance += amountToTransfer;
                    this.history.push(`- ${amountToTransfer}`)
                    return `You have successfully transferred ${amountToTransfer} to ${accountMatch.username}`
                }
                else{
                    return 'Please Recharge your amount';
                }
            }else{
                if(this.currentBalance - amountToTransfer - (amountToTransfer / 10)> 20){
                    this.currentBalance -= (amountToTransfer + (amountToTransfer / 10));
                    accountMatch.currentBalance += amountToTransfer;
                    this.history.push(`- ${amountToTransfer}`);
                    this.history.push(`- ${amountToTransfer / 10}`)
                    return `You have successfully transferred ${amountToTransfer} to ${accountMatch.username} (${amountToTransfer / 10} br is deducted due to transaction between different banks)`
                }
                else{
                    return 'Please Recharge your amount';
                }
            }
        }
        else{
            return 'Invalid Amount'
        }
    }
}

