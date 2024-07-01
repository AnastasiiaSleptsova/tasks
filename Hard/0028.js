/*
Реализуйте и экспортируйте по умолчанию функцию игры крестики-нолики на поле из 9 ячеек (представлены таблицей). В упражнении дается готовая функция генерации поля. Воспользуйтесь ей для инициализации игры. Поле нужно добавить в тег с классом .root.

Затем по клику игра ставит поочередно x и o на поле. Подразумевается, что оба игрока играют за одним компьютером и просто кликают по очереди.

Выигрыш в игре никак не отмечается. 

Ход меняется на каждый клик, в том числе по заполненной ячейке, при этом значение в заполненной ячейке остается прежним
*/

const generateField = () => {
  const tableEl = document.createElement("table");

  tableEl.className = "table-bordered";
  for (let i = 0; i < 3; i += 1) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 3; j += 1) {
      const cell = row.insertCell();
      cell.className = "py-2 px-3";
      cell.innerHTML = '<span class="invisible">s</span>';
    }
  }
  return tableEl;
};

const getTicTacToe = () => {
  const root = document.querySelector(".root");
  root.append(generateField());

  const table = document.querySelector(".table-bordered");
  let currentTeam = "x";

  table.addEventListener("click", (e) => {
    const currentElement = e.target;

    if (currentElement.textContent === "s") {
      currentElement.classList.remove("invisible");
      currentElement.textContent = currentTeam;
    }

    currentTeam = currentTeam === "x" ? "o" : "x";
  });
};

export default getTicTacToe;
