/*

В этой задаче вам нужно проанализировать данные — вычислить повторы каждого слова.

Создайте функцию getRepeats с одним параметром. В этот параметр будет приходить массив данных.

Функция должна возвращать объект, в котором указано сколько раз каждое слово встречается в массиве.

*/

// решение с помощью цикла

// const getRepeats = (array) => {
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//     if (!obj[array[i]]) {
//       obj[array[i]] = 1;
//     } else {
//       obj[array[i]]++;
//     }
//   }
//   return obj;
// };

// решение с помощью forEach

// const getRepeats = (arrayOfProperties) => {
//   let obj = {};
//   arrayOfProperties.forEach((prop) =>
//     obj[prop] ? obj[prop]++ : (obj[prop] = 1)
//   );
//   return obj;
// };

// решение с помощью reduce

// const getRepeats = (arr) =>
//   arr.reduce((acc, item) => {
//     acc[item] = acc[item] ? acc[item] + 1 : 1;
//     return acc;
//   }, {});
