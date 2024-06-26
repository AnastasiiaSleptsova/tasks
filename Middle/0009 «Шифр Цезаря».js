/* Техническое задание

Мне нужна новая программа расшифровки.

Есть массив symbols, в котором хранится алфавит (буквы и другие символы).

Есть массив encodedSymbols, в котором хранится зашифрованное сообщение. Каждый элемент этого массива — это индекс символа из массива symbols.

Индексы сдвинуты на величину в переменной shift. Пример: элемент из зашифрованного массива равен единице, значит с учётом сдвига десять это символ с индексом одиннадцать в массиве с алфавитом, то есть «К».

Программа дешифровки должна переводить элементы из массива с шифровкой в символы из массива алфавита и склеивать из них расшифрованную строку. Эту строку храним в переменной decodedMessage.

Если индекс со смещением выходит за пределы алфавита, то нужно вычесть из этого индекса длину алфавита (большие индексы шифруют символы в начале алфавита).

*/

// Алфавит
let symbols = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
  "а",
  "б",
  "в",
  "г",
  "д",
  "е",
  "ё",
  "ж",
  "з",
  "и",
  "й",
  "к",
  "л",
  "м",
  "н",
  "о",
  "п",
  "р",
  "с",
  "т",
  "у",
  "ф",
  "х",
  "ц",
  "ч",
  "ш",
  "щ",
  "ъ",
  "ы",
  "ь",
  "э",
  "ю",
  "я",
  " ",
  ".",
  ",",
  "—",
  "!",
];

// Смещение
let shift = 10;

// Закодированное сообщение
let encodedSymbols = [
  62, 28, 31, 56, 42, 40, 43, 27, 23, 56, 37, 28, 56, 25, 51, 39, 40, 38, 41,
  32, 48, 52, 56, 40, 51, 24, 34, 43, 56, 43, 56, 45, 38, 31, 55, 32, 37, 23,
  57,
];

// Раскодированное сообщение
let decodedMessage = "";

// Решение с помощью цикла №1

// for (i = 0; i < encodedSymbols.length; i++) {
//   for (j = 0; j < symbols.length; j++) {
//     if (encodedSymbols[i] + shift === j && encodedSymbols[i] + shift < symbols.length) {
//       decodedMessage += symbols[j]
//     } else if (encodedSymbols[i] + shift === j && encodedSymbols[i] + shift >= symbols.length) {
//       decodedMessage += symbols[j] - symbols.length
//     }
//   }
// }

// Решение с помощью цикла №2

for (let j = 0; j < encodedSymbols.length; j++) {
  let index = encodedSymbols[j] + shift;
  encodedSymbols +=
    symbols[index > symbols.length ? index - symbols.length : index];
}
