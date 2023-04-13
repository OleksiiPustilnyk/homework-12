// завдання 1
let age = prompt("Вік?");

let message =
  age < 18 ? "Не підходите(" : age < 46 ? "Підходите)" : "Не підходите(";
alert(message);

// завдання 2
let numA = prompt("Вкажіть чісло а");
let numB = prompt("Вкажіть чісло b");

if (numA < 3 || numA > 12 || numB < 5 || numB > 13) {
  alert("не вірно");
} else {
  alert("вірно");
}

// завдання 3
let userName = prompt("Ваше ім'я");
let sumDeposit = prompt("Сума депозиту");
let depositTime = prompt("Строк дії депозиту");
let percent =
  depositTime < 6
    ? ((sumDeposit * 15) / 100) * depositTime
    : depositTime < 9
    ? ((sumDeposit * 16) / 100) * depositTime
    : ((sumDeposit * 17) / 100) * depositTime;

if (depositTime < 6) {
  alert(
    `Шановний ${userName}, Ви внесли ${sumDeposit} грн., під 15% річних, на термін ${depositTime} місяців. За цей період часу Ви заробите ${percent} грн`
  );
}
if (depositTime < 9) {
  alert(
    `Шановний ${userName}, Ви внесли ${sumDeposit} грн., під 16% річних, на термін ${depositTime} місяців. За цей період часу Ви заробите ${percent} грн`
  );
} else {
  alert(
    `Шановний ${userName}, Ви внесли ${sumDeposit} грн., під 17% річних, на термін ${depositTime} місяців. За цей період часу Ви заробите ${percent} грн`
  );
}
