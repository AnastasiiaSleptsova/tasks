/* Техническое задание

Напиши программу, которая определяет сколько цифр в одном числе.

Само число записано в переменную number.

Найди количество цифр в этом числе и запиши результат в переменную quantity.

*/

let number = 123;
let quantity = 0;

// решение с помощью методов

// let string = number.toString();
// let array = string.split('');
// quantity = array.length;

// решение с помощью цикла

for (let i = 1; number / i >= 1; i *= 10) {
  quantity++;
}
