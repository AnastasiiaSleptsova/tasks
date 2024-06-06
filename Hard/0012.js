/* Техническое задание

Напиши сортировку массива выбором.

Массив записан в переменную numbers.

Отсортируй значения в массиве по возрастанию, от самого маленького значения к наибольшему.

*/

let numbers = [3, 5, 15, 6, 2, 1];

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    let firstNumber = numbers[i];
    if (firstNumber > numbers[j]) {
      numbers[i] = numbers[j];
      numbers[j] = firstNumber;
    }
  }
}
