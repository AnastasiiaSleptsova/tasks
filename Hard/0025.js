/* Реализуйте и экспортируйте функцию по умолчанию, 
которая находит дочерние текстовые узлы внутри элемента <div> и оборачивает текст в параграф. 
Переводы строк и отступы изменяться не должны:
*/

export default (document) => {
  const divs = [...document.getElementsByTagName("div")];
  divs.forEach((div) => {
    const textNodes = [...div.childNodes]
      .filter((child) => child instanceof Text)
      .filter((child) => child.textContent.trim() !== "");
    textNodes.forEach((node) => {
      const p = document.createElement("p");
      p.textContent = node.textContent;
      node.replaceWith(p);
    });
  });
};
