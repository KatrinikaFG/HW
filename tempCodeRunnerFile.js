const isEven = num => num % 2 === 0;
 
// // функция увеличивает полученное число num на 10
// const increaseNum = num => num + 10;
 
// const num = 6;
 
// const result = isEven(increaseNum(num) + 1) ? num + 1  : 2 - num;

// console.log(result)

// const smallestDivisor = (num) => {
//     // BEGIN (write your solution here)
//     if (num < 0) {
//         return NaN;
//       }
//       else if (num % 2 === 0) {
//         return 2;
//       }
//       const delenie = ( a ,  b ) => {
//         // if ((a / 2 + 1) === b) {
//         //    return a;
//         // }
//         if (a % b === 0) {
//           return b;
//         }
//         return delenie (a, (b + 1));
//       }
//       return delenie (num, 3);
//       // END
//     };
    
    
  
//   const result = smallestDivisor(15);
//   console.log(result);


// const smallestDivisor = (n) => {
//   if (n <= 0) {
//     return NaN;
//   }
  
//   let delenie = 2;
  
    
//   while (n % delenie != 0){
//     delenie = delenie+1;
//     console.log(delenie);
//   }
//     return delenie;
    
  //}
  // 


// END
//console.log(smallestDivisor(15));
//console.log(delenie);


const smallestDivisor = (num) => {
  if (num == 1){
    return num
  }

 else if (num>1) {
 
 let a = 2;

  while (num % a != 0){
    a++;
    console.log(a)
  } return a
 }else{
   return NaN
 }
}
  //   return a;
  // }
  
// END
console.log(smallestDivisor(15));