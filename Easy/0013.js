/* Техническое задание

Мяу! Напиши программу getProfitableProject, которая определяет, какой проект выгодней: срочный или обычный.

Функция принимает на вход два параметра:

- время на проект в часах;
- прибыль, которую принесёт сайт, если будет сделан в срочном режиме.

Названия параметров могут быть любыми.

Внутри функции надо сравнить два проекта: срочный и обычный.

Обрати внимание, что срочный проект принесёт прибыль за то время, пока готовился бы обычный проект. Поэтому прибыль от срочного проекта нужно вычесть из его стоимости.

Функция getProfitableProject должна возвращать строку:


- 'Выгодней срочный проект. Потратишь на него ' + расходы — если срочный проект окажется дешевле обычного.
- 'Выгодней обычный проект. Потратишь на него ' + расходы — если обычный проект дешевле.

*/

let getPrice = function (time, urgency) {
    let fixedRate = 1500;
    
    if (urgency) {
      time /= 2;
      fixedRate *= 2.5;
      }
    
    if (time > 150) {
      fixedRate -= 250;
      }
      return time * fixedRate;
    };
  
  const getProfitableProject = function (hours, profit) {
    const urgentProject = getPrice(hours, true) - profit;
    const notUrgentProject = getPrice(hours, false);
    let value;
    let expences;
    
    if (urgentProject < notUrgentProject) {
      value = 'срочный';
      expences = urgentProject;
      } else {
      value = 'обычный';
      expences = notUrgentProject;
      }
      
      return 'Выгодней ' + value + ' проект. Потратишь на него '+ expences;
    };
