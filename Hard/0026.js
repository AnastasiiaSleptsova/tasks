/* Реализуйте и экспортируйте по умолчанию функцию, которая нормализует имена классов для всех элементов на странице. Изначально названия всех классов написаны в стиле kebab-case, а при нормализации нужно изменить их названия на стиль camelCase: text-center => textCenter.

Попробуйте решить эту задачу без использования регулярных выражений.
*/

import "core-js/stable";
import "regenerator-runtime/runtime";
import camelCase from "lodash/camelCase";

export default (document) => {
  const allNodes = [...document.body.getElementsByTagName("*")];
  allNodes.forEach((node) => {
    const process = (item) => node.classList.replace(item, camelCase(item));
    node.classList.forEach(process);
  });
};
