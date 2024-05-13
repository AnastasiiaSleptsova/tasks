/* Техническое задание

Напиши программу, которая составит из элементов массива список покупок.

В результате должна получиться строка с элементами массива через запятую вида 'элемент, элемент, элемент'.

Каждый элемент должен быть отделён запятой, точка в конце строки не нужна. И помни про пробелы перед всеми словами, кроме первого.

Элементы должны добавляться в строку последовательно, начиная с самого первого элемента массива, заканчивая последним.

Массив с покупками записан в переменную groceries.

Строку со списком покупок записывай в переменную shoppingList.

*/

let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
let shoppingList = '';

// решение с помощью цикла 

// shoppingList = groceries.join(', ');

// for (i=0; i < groceries.length; i++) {
//   if (i< groceries.length -1) {
//     shoppingList = shoppingList + groceries[i] + ', ';
//   } else {
//     shoppingList = shoppingList + groceries[i];
//   }
// }

// решение с помощью метода reduce  

shoppingList = groceries.reduce((acc, item ) => {
  return acc + ', ' + item ;
  });
