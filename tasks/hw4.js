// Задание 1
 
console.log("Привет!")
console.log("Привет!")

// Задание 2

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Задание 3

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

// Задание 4

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов`);
}

// Задание 5

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2; // делим n на 2
    num++;  // увеличиваем счетчик итераций
}

console.log("Результат:", n);
console.log("Количество итераций:", num);

// Задание 6


let firstFriday = 3;
const daysInMonth = 31;

// Перебираем все дни месяца
for (let day = firstFriday; day <= daysInMonth; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}
