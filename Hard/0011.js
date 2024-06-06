/* Техническое задание

Напишите программу, которая меняет массив так, чтобы его элементы шли в обратном порядке, задом наперёд.

Массив записан в переменную numbers.

Обратите внимание, что вам нужно поменять порядок элеменов в массиве numbers. Создавать другую переменную для новой версии массива не нужно.

*/

let numbers = [1, 3, 5, 7, 9, 11];

// решение методом reverse
// numbers.reverse();

// решение циклом for
for (let i = 0; i < numbers.length / 2; i++) {
  let swapLast = numbers[numbers.length - 1 - i];
  let swapFirst = numbers[i];

  numbers[i] = swapLast;
  numbers[numbers.length - 1 - i] = swapFirst;
}
