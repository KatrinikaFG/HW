// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

// let result = 1;
// let step = 1;

// while (step <= 10){
//     result = 2 ** step;
//     step++;
//     console.log(result)
// }

let result = 1;
let step = 1;

while (step <= 10){
    result = result * 2;
    step++;
    console.log(result)
}


// // 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const result_f = (step) => {
  let result = 1;
  let steper = 1;
  while (steper <= step){
    result = result * 2;
    steper++;
    console.log(result)
}
}
result_f(5);
  
  

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let i = 0;
let sm = '';
while (i < 5){
    i++;
    console.log(sm+=':)')
}



// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), 
//а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

const printSmile = (stroka, numberOfRows) => {
    let i = 1;

    while (i < numberOfRows+1){
i++;
console.log(stroka+=':)')
    }
}
 printSmile('',5);


// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

const getWordStructure = (word) => {
  let countV = 0;
  let countC = 0;

  for (let i = 0; i < word.length;i++ ){
    registr = word.toLowerCase();
      if("eyuioa".indexOf(registr[i]) != -1){
        countV++;
        
      }else if ("qwrtpsdfghjklzxcvbnm".indexOf(registr[i]) != -1){
        countC++;
      }
    }
      console.log("Слово " + word + " состоит из " + countV + " гласных и " + countC + " согласных букв"); 
  
}
  getWordStructure('Check-liAst');


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'


const isPalindrom = (str) => {
  let i = str.length -1; 
  let result = "";
  registr = str.toLowerCase();
  while (i >= 0){
    
    result = result + registr[i];
    i--;
  }
if (registr === result){
  console.log(str, "- is Palindrom");
}else{
  console.log(str, " - is not Palindrom");
}
}
isPalindrom("Abba");

