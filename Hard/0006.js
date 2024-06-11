/* Техническое задание

Мяу! Напиши программу, которая проверяет, является ли число палиндромом.

Число записано в переменную poly.

Переменная, куда нужно записать «перевёрнутую» версию числа, называется ylop.

Выясни, является ли число из переменной poly палиндромом. Если да, значение флага isPalindrome должно быть true, если число не палиндром, то false.

*/

let poly = 1591;
let ylop = 0;
let isPalindrome = false;

const str = poly.toString().split("").reverse().join("");
ylop = parseInt(str);

if (ylop === poly) {
  isPalindrome = true;
}
