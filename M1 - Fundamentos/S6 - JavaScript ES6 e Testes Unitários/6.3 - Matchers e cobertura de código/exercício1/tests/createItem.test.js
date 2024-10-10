const createItem = require("../src/createItem");

describe("a função createItem", () => {
  it("cria um item válido", () => {
    const item = createItem("Arroz", "kg", 5.5, 2);
    expect(item).toEqual({
      name: "Arroz",
      unit: "kg",
      price: 5.5,
      quantity: 2,
    });
  });

  it("utiliza zero como quantidade padrão", () => {
    expect(createItem("Arroz", "kg", 5.5)).toHaveProperty("quantity", 0);
  });

  it("Lança um erro quando não recebe parâmetros", () => {
    expect(() => createItem()).toThrow(Error);
  });

  it("Lança um erro se o nome do item não é uma string", () => {
    expect(() => createItem(123, "kg", 5.5)).toThrow(Error);
  });

  it("Lança um erro se o preço é negativo", () => {
    expect(() => createItem("Arroz", "kg", -5.5)).toThrow(
      "O preço do item deve ser maior que zero"
    );
  });

  it("Lança um erro se o preço é zero", () => {
    expect(() => createItem("Arroz", "kg", 0)).toThrow(
      "O preço do item deve ser maior que zero"
    );
  });
});
