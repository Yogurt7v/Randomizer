// let sum = document.getElementById("sum");
// let size = document.getElementById("size");
// let random = document.getElementById("random");

// let startBtn = document.getElementById("start-btn");

// let sumValue = sum.value;

//пока очень тупо, но поробуем сделать для начала функции//
let sum = prompt("введите сумму документа");
console.log(sum);
let size = prompt("введите количество документов");
console.log(size);
let random = prompt("введите разлёт в процентах");
console.log(random);
let startDate = prompt("введите стартовую дату (Год, Месяц, День.)");
console.log(startDate);
let lastDate = prompt("введите конечную дату(Год, Месяц, День,)");
console.log(lastDate);

// функция генерирования суммы без копеек = работает//

let defaultDoc = sum / size;
let minDoc = defaultDoc - defaultDoc * (random / 100);
let maxDoc = defaultDoc + defaultDoc * (random / 100);

let firstDoc = Math.floor(Math.random() * (maxDoc - minDoc + 1) + minDoc);

// функция генерирования суммы с копеками = работает//

let secondDoc =
  Math.floor((Math.random() * (maxDoc - minDoc) + minDoc) * 100) / 100;

// Генератор даты - не работает!!//

// function generateDate() {
//   date = new Date(startDate).toString();
//   if (date.startsWith("Sun") || date.startsWith("Sat")) {
//     generateDate();
//   } else {
//     return date;
//   }
// }
