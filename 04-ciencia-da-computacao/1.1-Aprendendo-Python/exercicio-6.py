def verificar_tipo_triangulo(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b == c:
            return "Triângulo equilátero"
        elif a == b or a == c or b == c:
            return "Triângulo isósceles"
        else:
            return "Triângulo escaleno"
    else:
        return "Não é um triângulo"


print(verificar_tipo_triangulo(1, 1, 1))
