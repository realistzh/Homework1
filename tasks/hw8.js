/* 1 задание */
 
const people = [
   { name: 'Глеб', age: 29 },
   { name: 'Анна', age: 17 },
   { name: 'Олег', age: 7 },
   { name: 'Оксана', age: 47 }
];
 
console.log(people.sort((a, b) => a.age - b.age));
// [
//  { name: 'Олег', age: 7 },
//  { name: 'Анна', age: 17 },
//  { name: 'Глеб', age: 29 },
//  { name: 'Оксана', age: 47 }
// ]
 
 
 
/* 2 задание */
function isPositive(num) {
   return num > 0;
}
 
function isMale(person) {
   return person.gender === 'male';
}
 
function filter(array, ruleFunction) {
   const result = [];
   for (let i = 0; i < array.length; i++) {
      if (ruleFunction(array[i])) {
         result.push(array[i]);
      }
   }
   return result;
}
 
console.log(filter([3, -4, 1, 9], isPositive));
// [3, 1, 9]
 
const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];
 
console.log(filter(people, isMale));
// [
//  {name: 'Глеб', gender: 'male'},
//  {name: 'Олег', gender: 'male'}
// ]
 
/* 3 задание */
 
 
const intervalId = setInterval(() => { 
    console.log(new Date()); }, 3000); 
    setTimeout(() => { clearInterval(intervalId); 
    console.log('30 секунд прошло'); }, 30000);
 
 
 
 
/* 4 задание */
 
function delayForSecond(callback) {
   setTimeout(callback, 1000);
}
 
delayForSecond(function () {
   console.log('Привет, Глеб!');
})
 
 
 
 
/* 5 задание */
 
function delayForSecond(cb) { setTimeout(() => { console.log('Прошла одна секунда'); 
    if(cb) { cb(); } }, 1000) } 
    function sayHi (name) 
    { console.log(`Привет, ${name}!`); } // Исправленный вызов: delayForSecond(() => sayHi('Глеб'));
 
 