/* Реализуйте функцию capitalize(), которая принимает непустую строку и приводит первую букву строки к верхнему регистру:

const name = 'arya';
console.log(capitalize(name)); // => "Arya"
*/

const capitalize = (text) => text[0].toUpperCase() + text.slice(1);

export default capitalize;
