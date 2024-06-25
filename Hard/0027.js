/* В этом упражнении нужно реализовать логику добавления алертов по клику на кнопку.

Изначально на странице есть одна кнопка. Верстка выглядит так:
*/

// Реализация простая
// export default () => {
//     let count = 0;
//     let button = document.querySelector('#alert-generator');

//     const openAlert = () => {
//       const newDiv = document.createElement('div');
//       newDiv.className = 'alert alert-primary';
//       newDiv.textContent = `Alert ${++count}`;
//       document.querySelector('.alerts').prepend(newDiv)
//     };

//     button.addEventListener('click', openAlert);
//   };

// Реализация с удалением и setTimeout

export default () => {
  let count = 0;
  let button = document.querySelector("#alert-generator");

  const openAlert = () => {
    const newDiv = document.createElement("div");
    newDiv.className = "alert alert-primary";
    newDiv.textContent = `Alert ${++count}`;
    const timerId = setTimeout(() => {
      newDiv.remove();
    }, 3 * 1000);
    newDiv.onclick = () => {
      clearTimeout(timerId);
      this.remove();
    };
    document.querySelector(".alerts").prepend(newDiv);
  };

  button.addEventListener("click", openAlert);
};
