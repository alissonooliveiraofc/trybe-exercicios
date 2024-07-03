def imprimir_quadrado():
    # Obter o valor de n do usuário
    n = int(input("Digite o valor de n (maior que 1): "))

    if n <= 1:
        print("O valor de n deve ser maior que 1.")
    else:
        for _ in range(n):
            print("* " * n)


# Chamar a função para imprimir o quadrado
imprimir_quadrado()
