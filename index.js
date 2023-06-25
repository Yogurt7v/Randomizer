// let sum = document.querySelector("sum");
// let size = document.querySelector("size");
// let random = document.querySelector("random");

// let startBtn = document.querySelector("start-btn");

// let sumValue = sum.value;

// пока очень тупо, но поробуем сделать для начала функции//
// let sum = prompt("введите сумму документа");
// console.log(sum);
// let size = prompt("введите количество документов");
// console.log(size);
// let random = prompt("введите разлёт в процентах");
// console.log(random);

// переменные для случайной даты
let startDate = prompt("введите стартовую дату (Год, Месяц, День.)");
console.log(startDate);
let lastDate = prompt("введите конечную дату(Год, Месяц, День,)");
console.log(lastDate);

let startDateUni = new Date(startDate);
let startDateUniCode = startDateUni.getTime();
let lastDateUni = new Date(lastDate);
let lastDateUniCode = lastDateUni.getTime();

// функция случайной даты//

let randomDateUnicode = Math.floor(
  Math.random() * (lastDateUniCode - startDateUniCode + 1) + startDateUniCode
);
let randomDate = new Date(randomDateUnicode);
console.log(randomDate);

// Генератор даты - Работает//

function generateDate() {
  date = new Date(randomDate);
  let day = date.getDate();
  if (date.toString().startsWith("Sat")) {
    day = day + 2;
  } else if (date.toString().startsWith("Sun")) {
    day = day + 1;
  }
  console.log(day);
  if (day < 10) {
    day = "0" + day;
  }
  if (date.getMonth() < 10) {
    month = "0" + (date.getMonth() + 1);
  } else month = date.getMonth() + 1;
  return (date = `${day}:${month}:${date.getFullYear()}`);
}
generateDate(); // проверка работы функции
console.log(date); // проверка работы функции

// функция генерирования суммы без копеек = работает//

let defaultDoc = sum / size;
let minDoc = defaultDoc - defaultDoc * (random / 100);
let maxDoc = defaultDoc + defaultDoc * (random / 100);

let firstDoc = Math.floor(Math.random() * (maxDoc - minDoc + 1) + minDoc);

// функция генерирования суммы с копеками = работает//

let secondDoc =
  Math.floor((Math.random() * (maxDoc - minDoc) + minDoc) * 100) / 100;
