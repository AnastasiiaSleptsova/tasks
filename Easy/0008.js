/* Техническое задание

Напишите универсальную программу, которая вычисляет сумму чисел от 1 до n.

Число, до которого нужно складывать числа (включительно), указано в переменной lastNumber.

Найдите сумму всех чисел и сохраните результат в переменную sum.

*/

let lastNumber = 10;
let sum = 0;

for (i=0; i<=lastNumber; i++) {
  sum += i
}