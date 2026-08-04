// Задание 1

function minOfTwo(a, b) {
    return a < b ? a : b;
}

// Примеры использования
console.log(minOfTwo(8, 4));  // Вывод: 4
console.log(minOfTwo(6, 6));  // Вывод: 6

// Задание 2

function checkEvenOdd(n) {
    return n % 2 === 0 ? 'Число четное' : 'Число нечетное';
}

// Примеры использования
console.log(checkEvenOdd(4));  // Вывод: Число четное
console.log(checkEvenOdd(7));  // Вывод: Число нечетное

// Задание 3

// Функция, которая принимает число и выводит квадрат этого числа в консоль
function printSquare(number) {
    const square = number * number; // Вычисляем квадрат числа
    console.log(`Квадрат числа ${number} равен ${square}`); // Выводим результат
}

// Функция, которая принимает число и возвращает квадрат этого числа
function returnSquare(number) {
    return number * number; // Возвращаем квадрат числа
}

// Примеры использования функций
printSquare(4); // Выведет: Квадрат числа 4 равен 16

const result = returnSquare(5); // Получаем квадрат числа 5
console.log(`Квадрат числа 5 равен ${result}`); // Выведет: Квадрат числа 5 равен 25

// Задание 4

function checkAge() {
    // Запрашиваем у пользователя его возраст
    const age = prompt("Сколько вам лет?");

    // Преобразуем введенные данные в число
    const ageNumber = Number(age);

    // Проверяем, является ли введенное значение числом
    if (isNaN(ageNumber)) {
        console.log('Вы ввели неправильное значение');
        return;
    }

    // Проверяем условия
    if (ageNumber < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (ageNumber >= 0 && ageNumber <= 12) {
        console.log('Привет, друг!');
    } else if (ageNumber >= 13) {
        console.log('Добро пожаловать!');
    }
}

// Вызываем функцию
checkAge();

// Задание 5

function multiplyNumbers(a, b) {
    // Преобразуем входные значения в числа
    const num1 = Number(a);
    const num2 = Number(b);

    // Проверяем, являются ли оба значения действительными числами
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    }

    // Если оба значения - числа, возвращаем их произведение
    return num1 * num2;
}

// Примеры использования функции
console.log(multiplyNumbers(3, 5)); // Вернет 15
console.log(multiplyNumbers(3, 'а')); // Вернет 'Одно или оба значения не являются числом'
console.log(multiplyNumbers('3', '5')); // Вернет 15
console.log(multiplyNumbers(NaN, 5)); // Вернет 'Одно или оба значения не являются числом'

// Задание 6

function cubeOfNumber(n) {
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        const cube = Math.pow(n, 3);
        return `${n} в кубе равняется ${cube}`;
    }
}

// Проверка чисел от 0 до 10
for (let i = 0; i <= 10; i++) {
    console.log(cubeOfNumber(i));
}

// Задание 7

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Метод для вычисления площади круга
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    // Метод для вычисления периметра окружности
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Создание двух объектов круга с разными радиусами
const circle1 = new Circle(5); // радиус 5
const circle2 = new Circle(10); // радиус 10

// Примеры использования методов
console.log(`Площадь круга 1: ${circle1.getArea()}`); // Вывод площади круга 1
console.log(`Периметр круга 1: ${circle1.getPerimeter()}`); // Вывод периметра круга 1

console.log(`Площадь круга 2: ${circle2.getArea()}`); // Вывод площади круга 2
console.log(`Периметр круга 2: ${circle2.getPerimeter()}`); // Вывод периметра круга 2
