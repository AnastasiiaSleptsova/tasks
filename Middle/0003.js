/* Техническое задание

Мяу! Помоги мне посчитать ИМТ и процент жира в организме.

Моя длина записана в переменную length и указана в метрах.

Вес указан в килограммах и хранится в переменной weight.

Рассчитывай ИМТ по формуле: i = вес / длина ^ 2 (вес делить на длину в квадрате). 
Результат округляй с помощью Math.round и записывай в переменную bodyMassIndex.

Масса жира записана в переменную fatMass и указана в килограммах.

Чтобы найти процент жира, дели массу жировой ткани на вес. 
Результат умножай на 100, чтобы получить процент, округляй с помощью Math.round 
и записывай в переменную fatPercent.

*/

let length = 0.55;
let weight = 5;
let fatMass = 0.8;

const bodyMassIndex = Math.round(weight / length ** 2);
const fatPercent = Math.round((fatMass / weight) * 100);
