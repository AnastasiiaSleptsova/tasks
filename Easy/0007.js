/* Техническое задание

Напишите программу, 
которая последовательно выводит в консоль числа в геометрической прогрессии.

Стартовое значение, с которого должна начаться последовательность, 
записано в переменную startNumber.

Множитель записан в переменную multiplier.

Количество чисел записано в переменную quantity.

*/

let startNumber = 1;
let multiplier = 4;
let quantity = 7;

for (var i = 1; i <= quantity; i++) {
  if (i === 1) {
    console.log(startNumber);
  } else {
    startNumber *= multiplier;
    console.log(startNumber);
  }
}
