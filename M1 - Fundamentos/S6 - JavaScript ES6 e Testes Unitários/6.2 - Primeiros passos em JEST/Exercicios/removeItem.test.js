const removeItem = require("./removeItem");

describe("1) Testa a função removeItem", () => {
  it("Verifique se a chamada removeItem([1, 2, 3, 4], 3) retorna o array esperado.", () => {
    expect(removeItem([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
  });

  it("Verifique se a chamada removeItem([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(removeItem([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4]);
  });

  it("Verifique se a chamada removeItem([1, 2, 3, 4], 5) retorna o array esperado.", () => {
    expect(removeItem([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
  });
});
