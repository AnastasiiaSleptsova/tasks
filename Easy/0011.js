/* Техническое задание

Напиши программу, которая формирует заказ в виде строки.

Массив с вариантами основы для смузи записан в переменную liquids.

Массив с фруктами находится в переменной fruits.

Массив с зеленью записан в переменную greens.

Выбор посетителя записан в виде чисел в переменные chosenLiquid 
(индекс выбранной основы для смузи), chosenFruit (выбранный фрукт), 
chosenGreen (выбранная зелень).

Обрати внимание, что посетители выбирают пункты в электронном меню, 
где нумерация начинается с единицы, а не с нуля, как в массивах. 
Учти это при решении.

Собери строку с заказом посетителя вида 
'Основа — ' + основа для смузи + ', фрукт — ' + выбранный фрукт + ', зелень — ' + выбранная зелень. 
Запиши результат в переменную order.

*/

let liquids = ["вода", "молоко", "сок", "чай", "йогурт"];
let fruits = ["киви", "банан", "персик", "манго", "груша", "ананас"];
let greens = ["мята", "шпинат", "руккола", "петрушка", "базилик"];

// Выбор посетителя

let chosenLiquid = 1;
let chosenFruit = 3;
let chosenGreen = 2;

// Заказ

let order =
  "Основа — " +
  liquids[chosenLiquid - 1] +
  ", фрукт — " +
  fruits[chosenFruit - 1] +
  ", зелень — " +
  greens[chosenGreen - 1];
