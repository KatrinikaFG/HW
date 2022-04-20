let item_1 = 5;  // ex.1-2
let item_2 = 3;  // ex.4-5
let item_3 = item_1 + item_2;   // ex.7-8
let item_4 = 'Yolochka';   // ex.10-11
let item_5 = item_3; // ex.15-16
let item_6 = 15; // ex.17,19
let item_6_type = typeof(item_6); // ex.18,20
let item_7 = String(item_6); // ex.22
let item_7_type = typeof(item_7); // ex.23-24

// console.log(item_1); // ex.3
// console.log(item_2); // ex.6
// console.log(item_3); // ex.9
// console.log(item_4); // ex.12
// console.log(item_3 + item_4);  //ex.13
// console.log(item_3 * item_4);  //ex.14
// console.log(("item_6 ==" + item_6) + (", ") + ("item_6_type ==" + item_6_type));  //ex.21
//console.log(("item_7 ==" + item_7) + (", ") + ("item_7_type ==" + item_7_type));  //ex.25


let age_1 = 10; // ex.26
let age_2 = 18; // ex.27
let age_3 = 60; // ex.28

if (age_1 > 0){  // ex. 29
    if (age_1 < age_2){
        console.log("You don't have access cause your age is " + age_1 + " It's less then"); // ex.30
    }else if (age_1 >= age_2 && age_1 < age_3){
        console.log("Welcome!"); //ex.31
    }else if (age_1 > age_3){
        console.log("Keep calm and look Culture channel"); //ex.32
    }
}else {
    console.log("Technical work"); //ex.33
    }