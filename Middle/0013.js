/* Техническое задание

Напиши функцию calculateExpenses, которая вычисляет ежемесячные 
затраты компании на сотрудника из «чистой» зарплаты работника.

Функция должна принимать параметр netSalary – 
это «чистая» зарплата после вычета налогов.

В переменную incomeTax записан размер НДФЛ в процентах.

В переменной contributions указан общий размер взносов в процентах.

Функция должна возвращать общие затраты компании на сотрудника. 
Округляй результат вычислений с помощью Math.round.

*/

let incomeTax = 13;
let contributions = 30;


const calculateExpenses = (netSalary) => {
  let dirtySalary = netSalary / (100 - incomeTax) * 100;
  return Math.round(dirtySalary * (contributions / 100 + 1));
}
