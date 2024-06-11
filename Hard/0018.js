/*

Создайте функцию getSortedArray. У неё должно быть два параметра. Первый — массив, который нужно отсортировать. Второй — имя ключа в объектах. Именно по значению этого ключа нужно будет делать сортировку.

Функция должна возвращать отсортированный массив объектов.

Значения в массиве должны увеличиваться от меньшего к большему.

*/

// Решение с помощью метода sort

// const getSortedArray = (arr, nameKey) => arr.sort((a, b) => {
//     return a[nameKey] - b[nameKey];
//   });

// Решение с помощью цикла

const getSortedArray = (arr, nameKey) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i][nameKey] > arr[j][nameKey]) {
        let swap = arr[i];
        arr[i] = arr[j];
        arr[j] = swap;
      }
    }
  }
  return arr;
};
