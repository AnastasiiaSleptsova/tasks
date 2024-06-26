/*Если открыть веб-доступ, то можно увидеть страницу, на которой выведены несколько фраз в виде одной строки. Если открыть исходный код страницы прямо в браузере, то там эти же фразы выводятся друг под другом, а не одной строкой.

Подобное различие связано с тем, что браузер не учитывает переводы строк в исходном HTML при формировании страницы. Его волнует только наличие тегов. Только теги влияют на то, что будет происходить. Сам HTML при этом может быть одной строкой.

Задача этого упражнения — навести красоту на странице.

Обратите внимание, что JavaScript отрабатывает после того, как страница была сформирована. Сначала пользователь видит одну строку, и только затем выполняется преобразование. Это происходит быстро, поэтому начальное состояние быстро пропадает, но сам переход заметен.

index.js
Извлеките содержимое тега <body> и оберните каждую строку в тег <p>. Получившееся тело вставьте обратно. Чтобы получить из содержимого <body> независимые строки, нужно разбить тело по переводу строки.
*/

const text = document.body.innerHTML.trim();
const lines = text.split("\n");
const tags = lines.map((line) => `<p>${line.trim()}</p>`);
document.body.innerHTML = tags.join("\n");
