const { add } = require("../Middle/0013.js");

describe("основной кейс", () => {
  // Тест для случая, когда netSalary равен 50000
  it("5 + 5 = 10", () => {
    const result = add(5, 5);

    expect(result).toBe(10);
  });

  it("5 - 5 = 0", () => {
    const result = add(5, -5);

    expect(result).toBe(0);
  });
});
