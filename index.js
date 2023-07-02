let sumValue = document.querySelector(`.sum`);
let sizeValue = document.querySelector(`.size`);
let randomValue = document.querySelector(`.random`);
let startDateValue = document.querySelector(`.startDate`);
let lastDateValue = document.querySelector(`.lastDate`);

let startBtn = document.querySelector(`.start-btn`);
let clearBtn = document.querySelector(`.clear-btn`);
let result = document.querySelector(`.result`);

let vacation = [
  `01.01.2023`,
  `02.01.2023`,
  `03.01.2023`,
  `04.01.2023`,
  `05.01.2023`,
  `06.01.2023`,
  `23.02.2023`,
  `08.03.2023`,
  `29.04.2023`,
  `30.04.2023`,
  `01.05.2023`,
  `09.05.2023`,
  `10.05.2023`,
  `12.06.2023`,
];

startBtn.onclick = function () {
  let sum = sumValue.value;
  let size = sizeValue.value;
  let random = randomValue.value;
  let startDate = startDateValue.value;
  let lastDate = lastDateValue.value;

  // // переменные для случайной даты

  let startDateUni = new Date(startDate);
  let startDateUniCode = startDateUni.getTime();
  let lastDateUni = new Date(lastDate);
  let lastDateUniCode = lastDateUni.getTime();

  // функция случайной даты//

  // Генератор даты - Работает//

  function generateDate() {
    let randomDateUnicode = Math.floor(
      Math.random() * (lastDateUniCode - startDateUniCode + 1) +
        startDateUniCode
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
    if (day > 31) {
      day = 31;
    }
    if (date.getMonth() < 9) {
      month = "0" + (date.getMonth() + 1);
    } else month = date.getMonth() + 1;
    return (date = `${day}.${month}.${date.getFullYear()}`);
  }

  // функция генерирования суммы без копеек = работает//

  let defaultDoc = sum / size;
  let minDoc = defaultDoc - defaultDoc * (random / 100);
  let maxDoc = defaultDoc + defaultDoc * (random / 100);

  function firstDoc() {
    return Math.floor(Math.random() * (maxDoc - minDoc + 1) + minDoc);
  }

  // функция генерирования суммы с копеками = работает//

  function secondDoc() {
    return Math.floor((Math.random() * (maxDoc - minDoc) + minDoc) * 100) / 100;
  }

  // заверашающая функция с копейками и посчётом остатков - работает//
  function randomize() {
    let finalSum = 0;

    for (let i = 0; i < size - 1; i++) {
      let finalValue = firstDoc();
      let finalDate = generateDate();
      let invalidDate = new Date(finalDate);
      if (invalidDate == "Invalid Date") {
        finalDate = generateDate();
      }
      if (vacation.includes(finalDate)) {
        finalDate = generateDate();
      }
      finalSum = finalSum + finalValue;
      console.log("Дата " + finalDate + "\n" + "Сумма документа", finalValue);
    }
    let endDate = generateDate();
    let endValue = Math.floor((sum - finalSum) * 100) / 100;
    console.log("Дата " + endDate + "\n" + "Сумма документа", endValue);
  }

  randomize();
};

clearBtn.onclick = function () {
  console.clear();
};

/*   добавить вывод результа
  добавить проверку на выходные
  проверить вывод копеек
*/
