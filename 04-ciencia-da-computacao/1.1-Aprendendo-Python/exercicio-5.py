import math


def calcular_tinta(parede):
    cobertura_por_litro = 3
    capacidade_lata = 18
    preco_lata = 80

    litros_necessarios = parede / cobertura_por_litro
    latas_necessarias = litros_necessarios / capacidade_lata
    latas_necessarias = math.ceil(latas_necessarias)  # arredonda para cima
    preco_total = latas_necessarias * preco_lata

    return (latas_necessarias, preco_total)


print(calcular_tinta(54))
