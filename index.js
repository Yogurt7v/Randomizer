// let sum = document.querySelector("sum");
// let size = document.querySelector("size");
// let random = document.querySelector("random");

// let startBtn = document.querySelector("start-btn");
// let result = document.querySelector("#result");

// let sumValue = sum.value;

// пока очень тупо, но поробуем сделать для начала функции//
let sum = prompt("введите сумму документа");
console.log(sum);
let size = prompt("введите количество документов");
console.log(size);
let random = prompt("введите разлёт в процентах");
console.log(random);

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

// console.log(randomDate);

// Генератор даты - Работает//

function generateDate() {
  let randomDateUnicode = Math.floor(
    Math.random() * (lastDateUniCode - startDateUniCode + 1) + startDateUniCode
  );
  let randomDate = new Date(randomDateUnicode);
  date = new Date(randomDate);
  let day = date.getDate();
  if (date.toString().startsWith("Sat")) {
    day = day + 2;
  } else if (date.toString().startsWith("Sun")) {
    day = day + 1;
  }
  if (day < 10) {
    day = "0" + day;
  }
  if (date.getMonth() < 9) {
    month = "0" + (date.getMonth() + 1);
  } else month = date.getMonth() + 1;
  return (date = `${day}:${month}:${date.getFullYear()}`);
}

// функция генерирования суммы без копеек = работает//

let defaultDoc = sum / size;
let minDoc = defaultDoc - defaultDoc * (random / 100);
let maxDoc = defaultDoc + defaultDoc * (random / 100);

let firstDoc = Math.floor(Math.random() * (maxDoc - minDoc + 1) + minDoc);

// функция генерирования суммы с копеками = работает//

function secondDoc() {
  return Math.floor((Math.random() * (maxDoc - minDoc) + minDoc) * 100) / 100;
}

// заверашающая функция пока без копеек//
function randomize() {
  let finalSum = 0;
  for (let i = 0; i < size; i++) {
    let finalValue = secondDoc();
    let finalDate = generateDate();
    let invalidDate = new Date(finalDate);
    if (invalidDate == "Invalid Date") {
      finalDate = generateDate();
    }
    // finalSum = finalSum + finalValue; // dont work
    // if (finalSum > sum) {
    //   finalValue = finalSum - (finalSum - sum);
    // } else if (finalSum < sum) {
    //   finalValue = finalValue + (sum - finalSum);
    // }
    console.log("Дата " + finalDate + "\n" + "Сумма документа", finalValue);
    console.log(finalSum);
  }
}
randomize();
