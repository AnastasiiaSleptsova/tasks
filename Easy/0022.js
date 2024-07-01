/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/

const camelize = (str) => {
  let result = str.split("-").map((item, index) => {
    return index == 0 ? item : item[0].toUpperCase() + item.slice(1);
  });
  return result.join("");
};
