// const checkAge = (age) => {  // ex.1*
// if (age > 0){  
//     if (age < 18){
//         console.log("You don't have access cause your age is " + age + " It's less then"); 
//     }else if (age >= 18 && age < 60){
//         console.log("Welcome!"); 
//     }else if (age > 60){
//         console.log("Keep calm and look Culture channel"); 
//     }
// }else {
//     console.log("Technical work"); 
//  }
// };

// checkAge(17);
// checkAge(18);
// checkAge(61);



// const checkAge = function(age){   // ex.2*
// if (typeof (age) == "number"){
//     if (age < 18){
//         console.log("You don't have access cause your age is " + age + " It's less then"); 
//     }else if (age >= 18 && age < 60){
//         console.log("Welcome!"); 
//     }else if (age > 60){
//         console.log("Keep calm and look Culture channel"); 
        
//     }else {
//         console.log("Technical work"); 
//     }
// }else {console.log("Error")}
// }

// checkAge("ghdh");
    
    
// const checkAge = function(age){   // ex.3*

//     // if (Number(age)){
//     //if (!isNaN (age)){
//     if (+age){
//         if (age < 18){
//             console.log("You don't have access cause your age is " + age + " It's less then"); 
//         }else if (age >= 18 && age < 60){
//             console.log("Welcome!"); 
//         }else if (age > 60){
//             console.log("Keep calm and look Culture channel"); 
            
//         }else {
//             console.log("Technical work"); 
//         }
//     }else {console.log("Error")}
// }
    
// checkAge("50");


const checkAge = function(age){   // ex.4*
    if (+age){
        if (age < 18){
            console.log("You don't have access cause your age is " + age + " It's less then")
        }else if (age >= 18 && age < 60){
            console.log("Welcome!")
        }else if (age > 60){
            console.log("Keep calm and look Culture channel")
            
        }else {
            console.log("Technical work")
        }
    }else {console.log("Error")}
}

let agePrompt = prompt("Enter age");
checkAge(agePrompt);