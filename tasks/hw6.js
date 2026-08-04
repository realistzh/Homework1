// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break; // прекращаем работу цикла после вывода 10
    }
}

// Задание 2

const arr = [1, 5, 4, 10, 0, 3];
let index = -1; // значение по умолчанию, если элемент не найден

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        index = i;
        break; // прекращаем перебор, как только нашли нужное значение
    }
}

console.log(index); // 2

// Задание 3

const arr = [1, 3, 5, 10, 20];
const result = arr.join(' ');
console.log(result); // 1 3 5 10 20

// Задание 4

let arr = [];

for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = 1;
    }
}

console.log(arr); // [[1, 1, 1], [1, 1, 1], [1, 1, 1]]

// Задание 5

let arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr); // [1, 1, 1, 2, 2, 2]

// Задание 6

let arr = [9, 8, 7, 'a', 6, 5];

arr.sort();
arr = arr.filter(item => item !== 'a');

console.log(arr); // [5, 6, 7, 8, 9]

// Задание 7

let arr = [9, 8, 7, 6, 5];

let userNumber = Number(prompt('Угадайте число от 5 до 9:'));

if (arr.includes(userNumber)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8 

let str = 'abcdef';
let reversed = str.split('').reverse().join('');
console.log(reversed); // 'fedcba'

// Задание 9

let arr = [[1, 2, 3], [4, 5, 6]];
let result = [...arr[0], ...arr[1]];
console.log(result); // [1, 2, 3, 4, 5, 6]

// Задание 10

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);
}     // 3 5 7 9 11 13 15 17 19


// Задание 11 
function getSquareArray(arr) {
    return arr.map(num => num * num);
}
let result = getSquareArray([1, 2, 3, 4, 5]);
console.log(result); // [1, 4, 9, 16, 25]

// Задание 12

function getWordLengths(arr) {
    return arr.map(str => str.length);
}
let result = getWordLengths(['apple', 'banana', 'kiwi', 'orange']);
console.log(result); // [5, 6, 4, 6]

// Задание 13

function getNegativeNumbers(arr) {
    return arr.filter(num => num < 0);
}
let result = getNegativeNumbers([1, -2, 3, -4, 5, -6, 0]);
console.log(result); // [-2, -4, -6]

// Задание 14

// 1. Создаем массив из 10 случайных чисел от 0 до 10
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 11));
}

// 2. Отбираем только чётные числа
let evenNumbers = arr.filter(num => num % 2 === 0);

// 3. Выводим оба массива
console.log('Исходный массив:', arr);
console.log('Чётные значения:', evenNumbers);

// Задание 15

// 1. Создаем массив из 6 случайных чисел от 1 до 10
let arr = [];
for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random() * 10) + 1);
}

// 2. Находим сумму через reduce()
let sum = arr.reduce((acc, num) => acc + num, 0);

// 3. Вычисляем среднее арифметическое
let average = sum / arr.length;

// 4. Выводим результат
console.log('Исходный массив:', arr);
console.log('Сумма элементов:', sum);
console.log('Среднее арифметическое:', average);
