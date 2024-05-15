const { calculateExpenses } = require("../Middle/0013.js");

describe("основной кейс", () => {
  it("ЗП 130к", () => {
    const result = calculateExpenses(87);

    expect(result).toBe(130);
  });

  it("Передаём на вход -20", () => {
    const result = calculateExpenses(-20);

    expect(result).toBe(130);
  });

//   it("5 - 5 = 0", () => {
//     const result = add(5, -5);

//     expect(result).toBe(0);
//   });
});
