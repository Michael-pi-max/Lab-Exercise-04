// Declaring Object +  Remove the variables and modify with the object 
let personProfile = {
    firstName: "",
    lastName: "",
    birthYear: "",
    job: "",
    age: "",
    isEligibleToVote: false,
    familyMembers: [],
    weight: "",
    height: "",
    bmi: 0,
    ageCalc: function() { 
        return this.age = new Date().getFullYear() - this.birthYear; },
    checkVote: function() {
        let tempAge = this.ageCalc();
        if (tempAge >= 18) { this.isEligibleToVote = true; } else { this.isEligibleToVote = false; }
    },
    // BMI CALCULATOR
    calcBmi: function() {
        return this.bmi = Number.parseFloat(this.weight) / (Math.pow(Number.parseFloat(this.height), 2)).toFixed(2);
    },
    bmiDescription: function(){
        if(this.bmi < 18.5){
            return "UnderWeight"
        }
        else if(this.bmi > 18.5 && this.bmi < 24.9){
            return "Healthy Weight"
        }
        else if(this.bmi > 25.0 && this.bmi < 29.9){
            return "Overweight"
        }
        else if(30 < this.bmi){
            return "Obese"
        }
        else{
            return "check your input"
        }
       
    }
};

// call age and check vote fun


(function() {
    // Receive the values from input and assign to object properties
    personProfile.firstName = prompt("Enter Your First Name");
    personProfile.lastName = prompt("Enter Your Last Name");
    personProfile.job = prompt("What is Your Profession ?");
    personProfile.birthYear = prompt("Enter Your Birth Year");
    personProfile.weight = prompt("Your Weight in Kg  ? ");
    if(isNaN(personProfile.weight)){
        console.log('Invalid Input - Make sure you enter a number');
        personProfile.weight = prompt("Your Weight in Kg  ? ");
    }
    personProfile.height = prompt("Your Height in M  ? ");
    if(isNaN(personProfile.height)){
        console.log('Invalid Input - Make sure you enter a number');
        personProfile.height = prompt("Your Height in M  ? ");
    }
    
    let numberOfFamily = prompt("Number of Family  ? ");

    //Receiving the family number 
    for (let i = 0; i < parseInt(numberOfFamily); i++) {
        personProfile.familyMembers[i] = prompt("Your Family  Members " + (i + 1));
    }

    personProfile.ageCalc();
    personProfile.checkVote();


    console.log("**************************************************************")
    console.log("Here is your Profile ")
    console.log("Full Name: " + personProfile.firstName + " " + personProfile.lastName);
    console.log("Profession : " + personProfile.job);
    console.log("Age : " + personProfile.age + " " + "years old");
    console.log("Is Eligible to Vote : " + personProfile.isEligibleToVote);
    console.log("Family Members ");
    //Displaying the family member with foreach
    personProfile.familyMembers.forEach(function(member, index) {
        console.log("Family Member  " + (index + 1) + " : " + member);
    });
    console.log("********BMI DETAILS********")
    if(isNaN(personProfile.weight) || isNaN(personProfile.height)){
        console.log('Make sure you enter valid height or weight')
    }else{
        console.log("BMI " + personProfile.calcBmi().toFixed(2));
        console.log("Status " + personProfile.bmiDescription())
    }
    
    console.log("**************************************************************")

})();


