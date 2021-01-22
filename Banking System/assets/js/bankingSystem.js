function Bank(name, interestRate){
    this.name = name,
    this.interestRate = interestRate,
}

function Account(username, currentBalance, interest = true){
    this.username = username,
    this.currentBalance = currentBalance,
    this.interest = interest,
    this.balance = ()=>{
        return `Your currentBalance is ${this.currentBalance}`;
    },
    this.deposit = (amount) => {
        if(isNaN(amount)){
            return 'Invalid input'
        }else{
            this.currentBalance += amount;
             return `You have successfully deposited ${amount} and your current balance is ${this.currentBalance}`;
        }
    },
    this.withdraw = (amount) => {
        if(this.currentBalance - amount > 0){
            this.currentBalance -= amount;
            return `You have successfully withdrawn ${amount} and your current balance is ${this.currentBalance}`
        }else{
            return `Please Charge your balance`
        }
    },
    this.transfer = (amount, receiver) => {
        if(this.currentBalance - amount > 0){
            this.currentBalance -= amount;
            receiver.balance += amount;
            return `You have successfully transferred ${amount} to ${receiver}`
        }else{
            return `Please Charge your balance`
        }
    }

}

(function(){
        
}());


// lowest money to have
// lowest money to deposit
// from one bank to another extra paymenr
// method changes
// bank id to create bank
// jackpot







// let user1 = new Account('Michael', 1000);
// let user2 = new Account('Abenezer', 20);
// let users = [user1, user2]
// let navigationNumber;

// do{
//     (function(){
//         credential = prompt("***BANK***\n Enter Your Username")
        
//         if(users.forEach((user) => {
//             if(user.username != credential){
//                 return `No Account Found`
//             }
//         }));
//         else{
            

//             switch(credential){
                
//                 case 'Michael':
//                     navigationNumber = prompt("***BANK***\n   Press 1 to to check balance\n   press 2 to deposit money\n   press 3 to withdraw money\n   press 4 to transfer\n press 5 to exit\n")
//                     switch(navigationNumber){
//                         case "1":
//                             console.log(account[0].balance());
//                             break;
//                         case "2":
//                             let amount = +prompt("Enter Amount to deposit");
//                             console.log(deposit(amount));
//                             break;
                
//                         case "3":
//                             let amount2 = +prompt("Enter Amount to withdraw");
//                             console.log(withdraw(amount2));
//                             break;
                
//                         case "4":
//                             let amount3 = +prompt("Enter Amount to Transfer");
//                             let receiver = +prompt("Enter the account you want to transfer to");
//                             console.log(transfer(amount3, receiver ));
//                             break;
//                     }
//             }
//         }
//     }());
// }while(navigationNumber != 5);


















// let balance = ()=>{
//     return `Your currentBalance is ${currentBalance}`;
// }
// let deposit = (amount) => {
//     if(isNaN(amount)){
//         return 'Invalid input'
//     }else{
//         currentBalance += amount;
//     return `You have successfully deposited ${amount} and your current balance is ${currentBalance}`;
// }
//     }
    
// let withdraw = (amount) => {
//     if(currentBalance - amount > 0){
//         currentBalance -= amount;
//         return `You have successfully withdrawn ${amount} and your current balance is ${currentBalance}`
//     }else{
//         return `Please Charge your balance`
//     }
    
// }
// let transfer = (amount, receiver) => {
//     if(currentBalance - amount > 0){
//         currentBalance -= amount;
//          return `You have successfully transfered ${amount} to ${receiver}`
//     }else{
//         return `Please Charge your balance`
//     }
    
    
// }








// let navigationNumber;

// do{
//     (function(){
//         navigationNumber = prompt("***BANK***\n   Press 1 to to check balance\n   press 2 to deposit money\n   press 3 to withdraw money\n   press 4 to transfer\n press 5 to exit\n")
//         switch(navigationNumber){
//             case "1":
//                 console.log(balance());
//                 break;
//             case "2":
//                 let amount = +prompt("Enter Amount to deposit");
//                 console.log(deposit(amount));
//                 break;
    
//             case "3":
//                 let amount2 = +prompt("Enter Amount to withdraw");
//                 console.log(withdraw(amount2));
//                 break;
    
//             case "4":
//                 let amount3 = +prompt("Enter Amount to Transfer");
//                 let receiver = +prompt("Enter the account you want to transfer to");
//                 console.log(transfer(amount3, receiver ));
//                 break;
//         }
//     }());
// }while(navigationNumber != 5);
