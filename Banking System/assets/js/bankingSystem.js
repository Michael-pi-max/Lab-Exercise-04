banks = [];
users = [];

function Bank(name, interestRate, lowestAmount){
    this.name = name,
    this.interestRate = interestRate,
    this.lowestAmount = lowestAmount,
    this.users = []
}

function User(username, accountNumber, currentBalance,bankBranch, interest = true){
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
                ownerBank = banks.filter((bank) => this.bankBranch === bank.name)[0];
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
        let accountNumbers = users.map((user) => user.accountNumber);
        if(accountNumbers.includes(receiver)){
            let accountMatch = users.filter((user) => user.accountNumber === receiver)[0];
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
                if(this.currentBalance - amountToTransfer - 99> 20){
                    this.currentBalance -= (amountToTransfer + 99);
                    accountMatch.currentBalance += amountToTransfer;
                    this.history.push(`- ${amountToTransfer}`);
                    this.history.push(`- ${99}`)
                    return `You have successfully transferred ${amountToTransfer} to ${accountMatch.username} (99 br is deducted due to transaction between different banks)`
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

let mainNavigationNumber;
do{
(function(){
    mainNavigationNumber = prompt("Press 1 to CREATE BANK \n Press 2 to CREATE USER \n Press 3 to LOG IN to your ACCOUNT \n Press 4 to Exit");
    switch(mainNavigationNumber){
        case "1":
            let bankName = prompt("What is the name of the bank");
            let lowestAmount = +prompt("Enter the lowest possible amount");
            let interestRate = prompt("What is the interest rate");
            let bank = new Bank(bankName, interestRate, lowestAmount);
            banks.push(bank);
            break;
        case "2": 
            let userName = prompt("What is your name");
            let bankChoice = prompt(`Select a bank\n${listBanks()}\n\n write the name of the bank as written above`)
            let accountNumber = generateAccountNumber(10);
            let interestQuestion = prompt(`Do you want Interest to be added\nPress 1 for YES\nPress 2 for NO`);
            if(interestQuestion === "1"){
                interest = true;
            }else{
                interest = false;
            }
            alert(`your account number is ${accountNumber}`);
            banks.forEach((bank) => {
                if(bankChoice === bank.name){
                    let initialAmount = bank.lowestAmount;
                    let newUser = new User(userName, accountNumber, initialAmount, bankChoice, interest);
                    users.push(newUser);
                    bank.users.push(newUser);
                    alert("Your Account is SUCCESSFULLY CREATED")
                }
            });
            break;
        case "3":
            let credentialOption = prompt("How do you want to Log in \n Press 1 to log via USERNAME - requires ID \n Press 2 to log via ACCOUNT NUMBER ");
            switch(credentialOption){
                case "1":
                    // c stands for choose
                    let cUserName = prompt("Enter your USER NAME?");
                    let userNames = users.map((user) => user.username);
                    if (userNames.includes(cUserName)){
                        alert("Show me your ID Card");
                        let currentUser = users.filter((user) => user.username === cUserName)[0];
                        do{
                            userNavigationNumber = prompt(`***BANK*** ${currentUser.username} , ${currentUser.accountNumber}\n   Press 1 to to check balance\n   press 2 to deposit money\n   press 3 to withdraw money\n   press 4 to transfer\n Press h to see transaction history\n press 5 to exit\n`);
                            switch(userNavigationNumber){
                                case "1":
                                    console.log(currentUser.balance());
                                    break;
                                case "2":
                                    let amountToDeposit = +prompt("Enter Amount to deposit");
                                    console.log(currentUser.deposit(amountToDeposit));
                                    break;
                        
                                case "3":
                                    let amountToWithdraw = +prompt("Enter Amount to withdraw");
                                    console.log(currentUser.withdraw(amountToWithdraw));
                                    break;
                                
                                case "h":
                                    console.log(currentUser.history.forEach((h)=>console.log(h)));
                                    break;
                        
                                case "4":
                                    let amountToTransfer = +prompt("Enter Amount to Transfer");
                                    //finding actual Receiver
                                    let receiver = prompt("Enter the account you want to transfer to");
                                    console.log(currentUser.transfer(amountToTransfer, receiver));
                                    break;
                            }
                        }while(userNavigationNumber !== "5");
                    }else{
                        alert("Invalid Username - NO ACCOUNT FOUND : (");
                    }
                    break;
                case "2":
                    let cAccountNumber = prompt("Enter your ACCOUNT NUMBER");
                    let accountNumbers = users.map((user) => user.accountNumber);
                    if(accountNumbers.includes(cAccountNumber)){
                        let currentUser = users.filter((user) => user.accountNumber === cAccountNumber)[0];
                        do{
                            userNavigationNumber = prompt("***BANK***\n   Press 1 to to check balance\n   press 2 to deposit money\n   press 3 to withdraw money\n   press 4 to transfer\n press 5 to exit\n");
                            switch(userNavigationNumber){
                                case "1":
                                    console.log(currentUser.balance());
                                    break;
                                case "2":
                                    let amountToDeposit = +prompt("Enter Amount to deposit");
                                    console.log(currentUser.deposit(amountToDeposit));
                                    break;
                        
                                case "3":
                                    let amountToWithdraw = +prompt("Enter Amount to withdraw");
                                    console.log(currentUser.withdraw(amountToWithdraw));
                                    break;
                        
                                case "4":
                                    let amountToTransfer = +prompt("Enter Amount to Transfer");
                                    //finding actual Receiver
                                    let receiver = prompt("Enter the account you want to transfer to");
                                    console.log(currentUser.transfer(amountToTransfer, receiver));
                                    break;
                            }
                        }while(userNavigationNumber !== "5");
                    }else{
                        alert("Invalid Username - NO ACCOUNT FOUND : (");
                    break;
                }
            }
    }
}());
}while(mainNavigationNumber !== "4");

function generateAccountNumber(length) {
    var result = '';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 function listBanks(){
     let bankList = '';
     for (let i = 0; i < banks.length; i++){
         bankList += `${i + 1} . ${banks[i].name} \n`;
     }
     return bankList;
 }

function listOfUserNames(){
    let listAC = users.map((user) => ({
        accountNumber : user.accountNumber,
        userName : user.username,
        bank : user.bankBranch,
    }));
    return listAC;
}