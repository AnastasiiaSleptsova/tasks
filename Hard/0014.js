/* Техническое задание

Мяу! Напиши для меня программу-календарь.

Оформи программу в виде функции getDayOfWeek. У неё должно быть два параметра: день недели, на который выпадает первое число месяца, и число, для которого нужно найти день недели в этом месяце.

Функция должна возвращать строку с названием дня недели. Название должно быть написано с маленькой буквы в именительном падеже: 'понедельник', 'вторник' и так далее.

*/

// A terrible decision

let getDayOfWeek = (firstWeekDay, numberDay) => {
  let arr = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
  ];
  return arr[arr.indexOf(firstWeekDay) + numberDay - 1];
};
