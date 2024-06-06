/* Техническое задание

Мяу! Напиши функцию calculateRoots, которая будет считать корни через дискриминант.

Формула дискриминанта выглядит так: b * b - 4 * a * c. Функция должна принимать на вход три параметра: a, b, c. Это коэффициенты из формулы дискриминанта.

Если полученное число меньше 0, функция должна возвращать строку 'Корней нет'.

Если результат равен 0, корень в уравнении один. Функция должна возвращать строку 'Корень равен ' + найденный корень. Формула корня в этом случае такая: -b / (2 * a).

А вот если дискриминант больше 0, корня два. Придётся посчитать каждый и добавить результат в строку. Формула для первого корня: (-b + √D) / (2 * a). Формула для второго корня: (-b - √D) / (2 * a). Функция должна возвращать строку 'Первый корень равен ' + первый корень + ', второй корень равен ' + второй корень.

*/

let calculateRoots = (a, b, c) => {
  let discriminant = b * b - 4 * a * c;
  if (discriminant < 0) {
    return "Корней нет";
  } else if (discriminant === 0) {
    let Sqrt = -b / (2 * a);
    return "Корень равен " + Sqrt;
  } else {
    let firstSqrt = (-b + Math.sqrt(discriminant)) / (2 * a);
    let secondSqrt = (-b - Math.sqrt(discriminant)) / (2 * a);
    return (
      "Первый корень равен " + firstSqrt + ", второй корень равен " + secondSqrt
    );
  }
};
