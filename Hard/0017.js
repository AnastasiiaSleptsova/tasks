/* Техническое задание

Мяу! Мне нужна программа getProfitableDeposit для сравнения вкладов. У неё должно быть четыре параметра:

исходный размер депозита;
срок депозита в месяцах;
процентная ставка для депозита с простыми процентами;
процентная ставка для депозита с капитализацией процентов.

Программа должна рассчитать, сколько я получу с двух разных вкладов: с обычными процентами и с капитализацией. Затем программа должна сравнить результаты и вернуть подходящую строку:

'Выбирай обычный вклад. Получишь ' + доход от вклада.
'Выбирай капитализацию. Получишь ' + доход от вклада.

*/

const calculateDeposit = function (
  startSum,
  percent,
  months,
  isCapitalization
) {
  let deposit = startSum;
  let sumPercent = 0;
  if (isCapitalization) {
    for (let i = 0; i < months; i++) {
      sumPercent = deposit * (percent / 100 / 12);
      deposit += sumPercent;
    }
  } else {
    deposit = (percent / 100 / 12) * startSum * months + startSum;
  }
  return Math.floor(deposit);
};

const getProfitableDeposit = (initial, months, percentSimple, percentCap) => {
  const resultSimple = calculateDeposit(initial, percentSimple, months, false);
  const resultCap = calculateDeposit(initial, percentCap, months, true);
  let offer = "";

  if (resultSimple > resultCap)
    offer = `Выбирай обычный вклад. Получишь ${resultSimple}`;
  else offer = `Выбирай капитализацию. Получишь ${resultCap}`;

  return offer;
};
