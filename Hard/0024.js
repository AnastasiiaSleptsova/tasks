/* В этом упражнении задачка, похожая на предыдущую. Но теперь мы будем использовать поисковые методы без прямого обхода дерева.

Нам нужно извлечь данные с фиксированной структурой. Мы будем парсить страницу категории статей. Эта страница содержит заголовок категории, его описание и ссылки на статьи с небольшим описанием. Эта структура не меняется, меняется только количество статей от категории к категории.

src/extractor.js
Реализуйте логику функции, которая принимает на вход document, извлекает из него данные и возвращает объект нужной структуры:
*/

export default (document) => {
  const categoriesList = Array.from(document.querySelectorAll("h1"));
  const descriptionList = Array.from(document.querySelectorAll(".description"));
  const linksList = Array.from(document.querySelectorAll(".links"));

  const res = linksList.map((linkNode, index) => {
    const childrensList = Array.from(linkNode.children);

    const items = childrensList.map((article) => {
      return {
        title: article.querySelector("h2").textContent,
        description: article.querySelector("p").textContent,
      };
    });

    return {
      title: categoriesList[index].textContent,
      description: descriptionList[index].textContent,
      items,
    };
  });

  return res.length === 1 ? res[0] : res;
};
