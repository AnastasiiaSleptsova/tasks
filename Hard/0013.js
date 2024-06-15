/* Техническое задание

Мяу! Напиши программу getYears, которая будет возвращать массив с подходящими датами для Олимпиады.

Функция должна принимать на вход три параметра. Первый параметр — год, с которого нужно начать вести отсчёт (включительно). Второй — год, которым этот отсчёт надо закончить (включительно). Третий — число, которое обозначает сумму цифр в номере года.

Названия параметров могут быть любыми.

Годы в массиве должны быть числами и располагаться по возрастанию, от меньшего к большему.

*/

const calculateSumYear = (year) => {
  let sum = 0,
    x = String(year);
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return sum;
};

const getYears = function (yearStart, yearFinal, numberSun) {
  let olympYears = [];
  for (let i = yearStart; i <= yearFinal; i++) {
    if (calculateSumYear(i) === numberSun) {
      olympYears.push(i);
    }
  }
  return olympYears;
};
