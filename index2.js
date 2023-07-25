let sumValue = document.querySelector(`.sum`);
let sizeValue = document.querySelector(`.size`);
let randomValue = document.querySelector(`.random`);
let startDateValue = document.querySelector(`.startDate`);
let lastDateValue = document.querySelector(`.lastDate`);

let startBtn = document.querySelector(`.start-btn`);
let clearBtn = document.querySelector(`.clear-btn`);
let result = document.querySelector(`.result`);

let dates = [];
let values = [];

let a;

let vacation = [
  `01.01.2020`,
  `02.01.2020`,
  `03.01.2020`,
  `06.01.2020`,
  `07.01.2020`,
  `08.01.2020`,
  `24.02.2020`,
  `09.03.2020`,
  `04.05.2020`,
  `05.05.2020`,
  `12.06.2020`,
  `04.11.2020`,
  `01.01.2021`,
  `04.01.2021`,
  `05.01.2021`,
  `06.01.2021`,
  `07.01.2021`,
  `08.01.2021`,
  `22.02.2021`,
  `23.02.2021`,
  `08.02.2021`,
  `03.05.2021`,
  `10.05.2021`,
  `14.06.2021`,
  `04.11.2021`,
  `05.11.2021`,
  `31.12.2021`,
  `03.01.2022`,
  `04.01.2022`,
  `05.01.2022`,
  `06.01.2022`,
  `07.01.2022`,
  `23.02.2022`,
  `07.03.2022`,
  `08.03.2022`,
  `02.05.2022`,
  `03.05.2022`,
  `09.05.2022`,
  `10.05.2022`,
  `13.06.2022`,
  `04.11.2022`,
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
  `08.05.2023`,
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

  let startDateUni = new Date(startDate);
  let startDateUniCode = startDateUni.getTime();
  let lastDateUni = new Date(lastDate);
  let lastDateUniCode = lastDateUni.getTime();
  let date = 0;
  a = size;

  // функция генерирования даты
  function generateDate() {
    let randomDateUnicode = Math.round(
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
    return `${day}.${month}.${date.getFullYear()}`;
  }

  let defaultDoc = sum / size;
  let minDoc = defaultDoc - defaultDoc * (random / 100);
  let maxDoc = defaultDoc + defaultDoc * (random / 100);

  //функция без копеек
  function firstDoc() {
    return Math.round(Math.random() * (maxDoc - minDoc + 1) + minDoc);
  }
  // функция с копейками
  function secondDoc() {
    return Math.round((Math.random() * (maxDoc - minDoc) + minDoc) * 100) / 100;
  }

  //финальная фунция
  function randomize() {
    let finalSum = 0;

    for (let i = 1; i <= size; i++) {
      let finalDate = generateDate();
      while (vacation.includes(finalDate)) {
        finalDate = generateDate();
      }
      
      dates.push(finalDate);
    }
    for (let j = 1; j < size; j++) {
      let finalValue = firstDoc();
      values.push(finalValue);
      finalSum = finalSum + finalValue;
    }

    let endValue = Math.round((sum - finalSum) * 100) / 100;
    values.push(endValue);
  }
  randomize();
  console.log(dates);
  console.log(values);

  let str = ` `;
  for (let i = 0; i < dates.length; i++) {
    str +=
      i + 1 + `) ` + `Дата: ${dates[i]}   ` + `Сумма: ${values[i]}` + "<br>";
  }
  result.innerHTML = str;
};

clearBtn.onclick = function () {
  dates = [];
  values = [];
  result.innerHTML = ` `;
  console.clear();
};
