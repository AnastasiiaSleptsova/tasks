const { calculateExpenses } = require("../Middle/0013.js");

describe("основной кейс", () => {
  it("ЗП 130к", () => {
    const result = calculateExpenses(87);

    expect(result).toBe(130);
  });
});
