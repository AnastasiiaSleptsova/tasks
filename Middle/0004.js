/* Техническое задание

Мяу! Напиши программу, которая будет рассчитывать сумму покупки с учётом скидки.

Стоимость записана в переменную price.

Если стоимость покупки от 1000 (включительно) до 3000 (не включая это значение), 
скидка составляет 5%.

Если стоимость покупки от 3000 (включительно) до 5000 (не включая это значение), 
скидка 10%.

Если стоимость покупки от 5000 (включительно) и выше, скидка 15%.

В остальных случаях скидки для покупателей нет.

Вычисляй стоимость с учётом скидки и записывай результат в переменную
discountedPrice.

*/

let price = 1200;
let discountedPrice;

if (price >= 1000 && price < 3000) {
  discountedPrice = price * 0.95;
} else if (price >= 3000 && price < 5000) {
  discountedPrice = price * 0.9;
} else if (price >= 5000) {
  discountedPrice = price * 0.85;
} else {
  discountedPrice = price * 1;
}
