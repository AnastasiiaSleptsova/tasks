/* Техническое задание

Мяу! Напиши программу, которая на основе одного массива с книгами создаст другой.

Массив книг записан в переменную books.

В переменную minNumber записано минимальное количество букв в названии книги (включительно), 
а в переменную maxNumber записано максимальное число букв (включительно). 
Чтобы найти количество букв в названии, используй команду строка.length.

Собери новый массив на основе изначального, добавляя элементы последовательно 
(от меньшего индекса к большему).

Результат запиши в переменную filteredBooks.

Для добавления элементов в новый массив используй команду array.push().

*/

let books = [
  "Улисс",
  "Маугли",
  "Сияние",
  "Ревизор",
  "Гамлет",
  "Обломов",
  "Дюймовочка",
  "Шантарам",
  "Вий",
  "Сильмариллион",
  "Оно",
];
let minNumber = 3;
let maxNumber = 5;
let filteredBooks = [];

// решение с помощью цикла

// for (i = 0; i < books.length; i++) {
//   if (books[i].length >= minNumber && books[i].length <= maxNumber) {
//     filteredBooks.push(books[i])
//   }
// }

// решение с помощью метода массива forEach

// books.forEach((item) => {
//   return (item.length >= minNumber && item.length <= maxNumber) ? filteredBooks.push(item) : ''
// })

// решение с помощью метода массива map

// books.map(item => {
//   return (item.length >= minNumber && item.length <= maxNumber) ? filteredBooks.push(item) : '';
// })

// решение с помощью метода массива filter

filteredBooks = books.filter(
  (item) => item.length >= minNumber && item.length <= maxNumber,
);
