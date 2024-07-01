/* Реализуйте функцию isLeapYear(), которая определяет, является ли год високосным. 
Если год високосный, функция должна вернуть true, если нет – false. 
Год считается високосным, если он кратен (то есть делится без остатка) 
400 или он одновременно кратен 4 и не кратен 100. 
*/

const isLeapYear = (year) => {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
};

export default isLeapYear;
