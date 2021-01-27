let history = [];

let seeHistory = () => {
    history.forEach((his) => {
        console.log(`${his } \n`)
    });
}

let addMany = (c) => {
    let additionOperation = '';
    d = c.map(item => {
        additionOperation += `${item} + `;
        return Number.parseInt(item);
    });
    
    e = d.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    additionOperation = additionOperation.slice(0, -3)
    additionOperation += ` = ${e}`;
    history.push(additionOperation);
    return e;
}


let multiplyMany = (c) => {
    let multiplicationOperation = '';
    d = c.map(item => {
        multiplicationOperation += `${item} x `;
        return Number.parseInt(item)
    });
    e = d.reduce((accumulator, currentValue) => {
        return accumulator * currentValue;
    }, 1);
    multiplicationOperation = multiplicationOperation.slice(0, -3);
    multiplicationOperation += ` = ${e}`;
    history.push(multiplicationOperation);
    console.log(history);

    return e;
}

let subtract = (a, b) => {
    let subtractOperation = '';
    if(isNaN(a) || isNaN(b)){
        return `Invalid Input`
    }else{
        subtractOperation += `${a} - ${b} = ${a - b}`;
        history.push(subtractOperation);
        return a - b;
    }
    
}


let divide = (a, b) => {
    let divideOperation = '';
    if(b === 0){
        return "Invalid Denominator"; 
    }
    if(isNaN(a) || isNaN(b)){
        return `Invalid Input`;
    }else{
        divideOperation += `${a} / ${b} = ${a / b}`;
        history.push(divideOperation);
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


        navigationNumber = prompt("***SIMPLE CALCULATOR***\n   Press 1 to add\n   press 2 to subtract\n   press 3 to multiply\n   press 4 to divide\n   press 5 to get maximum\n   press 6 to get minimum\n   press 7 to get average\n   press 8 to square a number \n press h to view history \n press 9 to exit")
        switch(navigationNumber){
            case "1":
                let c = prompt("Enter Numbers to add \n Use space to delimit the numbers").split(" ");
                console.log(addMany(c));
                break;
            case "2":
                let a = +prompt("Enter first number");
                let b = +prompt("Enter second number");
                console.log(subtract(a, b));
                break;

            case "3":
                let d = prompt("Enter Numbers to multiply \n Use space to delimit the numbers").split(" ");
                console.log(multiplyMany(d));
                break;

            case "4":
                let i = +prompt("Enter first number");
                let k = +prompt("Enter second number");
                console.log(divide(i, k));
                break;

            case "5":
                let e = prompt("Enter Numbers to Compare and point out the maximum").split(" ");
                console.log(max(e));
                break;

            case "6":
                let f = prompt("Enter Numbers to Compare and point out the minimum").split(" ");
                console.log(min(f));
                break;

            case "7":
                let g = prompt("Enter numbers to get average value").split(" ");
                console.log(average(g));
                break;

            case "8":
                let h = +prompt("Enter first number");
                console.log(square(h));
                break;
            case "h":
                console.log('****HISTORY****');
                seeHistory();
                console.log("***************");
                break;
        }
    }());
}while(navigationNumber != "9")
