/* Задание 1 */

console.log('js'.toUpperCase());

/* Результат: JS */


/* Задание 2 */

function filterByStart(arr, str) {
  return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

// Пример использования:
console.log(filterByStart(['Apple', 'banana', 'Avocado', 'orange'], 'a'));
// ['Apple', 'Avocado']

/* Задание 3 */

const num = 32.58884;

console.log(Math.floor(num)); // 32
console.log(Math.ceil(num));  // 33
console.log(Math.round(num)); // 33

/* Задание 4 */


console.log(Math.min(52, 53, 49, 77, 21, 32)); // 21
console.log(Math.max(52, 53, 49, 77, 21, 32)); // 77

/* Задание 5 */


function randomNumber() {
  console.log(Math.floor(Math.random() * 10) + 1);
}

randomNumber();

/* Выводит случайное число от 1 до 10 */


/* Задание 6 */

function randomArray(num) {
  const length = Math.floor(num / 2);
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * (num + 1)));
  }

  return result;
}

console.log(randomArray(10));
// например: [3, 7, 0, 10, 4]

/* Задание 7 */

function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInRange(5, 15));
// например: 9

/* Задание 8 */

console.log(new Date());

/* Выводит: Tue Aug 11 2026 15:22:13 GMT+0300 (Москва, стандартное время) */

/* Задание 9 */

const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);
/* Выводит: Fri Oct 23 2026 15:27:29 GMT+0300 (Москва, стандартное время) */

/* Задание 10 */

function formatDate(date) {
  const months = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

  const weekdays = [
    'воскресенье', 'понедельник', 'вторник', 'среда',
    'четверг', 'пятница', 'суббота'];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const weekday = weekdays[date.getDay()];

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `Дата: ${day} ${month} ${year} — это ${weekday}. Время: ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));
// например: Дата: 11 августа 2026 — это вторник. Время: 15:54:12