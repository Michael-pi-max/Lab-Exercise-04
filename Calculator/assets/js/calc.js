

// let add = (a, b) => {
//     return a + b;
// }

let addMany = (c) => {
    
    d = c.map(item => Number.parseInt(item))
    e = d.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return e;
}

let multiplyMany = (c) => {
    d = c.map(item => Number.parseInt(item))
    e = d.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
    }, 1);
    return e;
}

let subtract = (a, b) => {
    if(isNaN(a) || isNaN(b)){
        return `Invalid Input`
    }else{
        return a - b;
    }
    
}
// let multiply = (a, b) => {
//     return a * b;
// }
let divide = (a, b) => {
    if(b === 0){
        return "Invalid Denominator"; 
    }
    if(isNaN(a) || isNaN(b)){
        return `Invalid Input`
    }else{
        return a / b;
    }
}

let average = (c) => {
    return divide(addMany(c),c.length)
}

let max = (c) => {
    d = c.map(item => Number.parseInt(item))
    currentMax = d[0];
    d.forEach(item => {
        if(item > currentMax){
            currentMax = item
        }
    });
    return currentMax;
}

let min = (c) => {
    d = c.map(item => Number.parseInt(item))
    currentMin = d[0];
    d.forEach(item => {
        if(item < currentMin){
            currentMin = item
        }
    });
    return currentMin;
}

let square = (a) => {
    return Math.pow(a, 2);
}

// All in one
let calculate = (a, b, operatorFunction) => {
    operatorFunction(a, b);
}

let navigationNumber;

do{
    (function(){


        navigationNumber = prompt("***SIMPLE CALCULATOR***\n   Press 1 to add\n   press 2 to subtract\n   press 3 to multiply\n   press 4 to divide\n   press 5 to get maximum\n   press 6 to get minimum\n   press 7 to get average\n   press 8 to square a number \n press 9 to exit")
        switch(navigationNumber){
            case "1":
                let c = prompt("Enter Numbers to add \n Use space to delimit the numbers").split(" ");
                console.log(addMany(c));
                // setTimeout(()=>{returnToHome}, 2000);
                break;
            case "2":
                let a = +prompt("Enter first number");
                let b = +prompt("Enter second number");
                console.log(subtract(a, b));
                // setTimeout(()=>{returnToHome}, 2000);
                break;

            case "3":
                let d = prompt("Enter Numbers to multiply \n Use space to delimit the numbers").split(" ");
                console.log(multiplyMany(d));
                // setTimeout(()=>{returnToHome}, 2000);
                break;

            case "4":
                let i = +prompt("Enter first number");
                let k = +prompt("Enter second number");
                console.log(divide(i, k));
                // setTimeout(()=>{returnToHome}, 2000);
                break;

            case "5":
                let e = prompt("Enter Numbers to Compare and point out the maximum").split(" ");
                console.log(max(e));
                // setTimeout(()=>{returnToHome}, 2000);
                break;

            case "6":
                let f = prompt("Enter Numbers to Compare and point out the minimum").split(" ");
                console.log(min(f));
                // setTimeout(()=>{returnToHome}, 2000);
                break;

            case "7":
                let g = prompt("Enter numbers to get average value").split(" ");
                console.log(average(g));
                // setTimeout(()=>{returnToHome}, 2000);
                break;

            case "8":
                let h = +prompt("Enter first number");
                console.log(square(h));
                // setTimeout(()=>{returnToHome}, 2000);
                break;
            
        }
    }());
}while(navigationNumber != "9")
