const { encode, decode } = require("./encodeDecode");

describe("Testa a função encode e decode", () => {
  it("Teste se encode e decode são funções.", () => {
    expect(typeof encode && typeof decode).toBe("function");
  });

  it("Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente.", () => {
    expect(encode("a, e, i, o, u")).toBe("1, 2, 3, 4, 5");
  });

  it('converte apenas a vogal "a" no número 1', () => {
    expect(encode("ana")).toEqual("1n1");
  });
  it('converte a vogal "e" no número 2', () => {
    expect(encode("ele")).toEqual("2l2");
  });
  it('converte a vogal "i" no número 3', () => {
    expect(encode("xixi")).toEqual("x3x3");
  });
  it('converte a vogal "o" no número 4', () => {
    expect(encode("ovo")).toEqual("4v4");
  });
  it('converte a vogal "u" no número 5', () => {
    expect(encode("nu")).toEqual("n5");
  });

  it("Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.", () => {
    expect(encode("teste")).toHaveLength(5);
    expect(decode("teste")).toHaveLength(5);
  });
});
