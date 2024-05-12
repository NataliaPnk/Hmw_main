// Задача 1.
// Определите количество ЧАСОВ которые прошли с 1970 года до текущего момента времени.
// Примечание: полученное значение округлите по правилам математики.

let currentTime = Date.now();
let oldTime = new Date(1970);
let countHours = currentTime - oldTime;
let timeDifference = countHours / (1000 * 60 * 60);

console.log(Math.round(timeDifference));

// ---------------------------------
// Задача 2
// Какое количество дней прошло с начала 2000 года до текущего момент времени?
// Примечание: полученное значение округлите по правилам математики

let currentTime2 = Date.now();
let oldTime2 = new Date(2000);
let countDays = currentTime2 - oldTime2;
let timeDifference2 = countDays / (1000 * 60 * 60 * 24);

console.log(Math.round(timeDifference2));

// ---------------------------------
// Задача 3.
// Напишите функцию getWeekDay(), которая в зависимости от даты
// (текущего момента времени) в консоль выводит день недели согласно результату

// Пример:
// getWeekDay()

// Результат:
// 'Сегодня вторник'

function getWeekDay() {
  let daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  let currentTime3 = new Date();
  let dayOfWeek = currentTime3.getDay();
  let currentDay = daysOfWeek[dayOfWeek];
  return `Сегодня: ${currentDay}`;
}

console.log(getWeekDay());

// --------------------------------
// Задача 4.
// Напишите функцию checkDate() которая в консоль отобразит количество дней до конца текущего месяца.
// Примечание: инициализация дат должна быть внутри функции

function checkDate() {
  let currentDay2 = new Date();
  let endOfMonth = new Date(2024, 4, 31);
  let countDays2 = endOfMonth - currentDay2;
  let daysLeft = countDays2 / (1000 * 60 * 60 * 24);
  return Math.round(daysLeft);
}

console.log(checkDate());
