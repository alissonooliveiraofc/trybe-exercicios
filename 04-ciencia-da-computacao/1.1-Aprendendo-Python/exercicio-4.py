def maior_nome(*nomes):
    """Retorna o maior nome entre os nomes passados como parâmetro"""
    maior = nomes[0]
    for nome in nomes:
        if len(nome) > len(maior):
            maior = nome
    return maior


print(maior_nome("Gabriel", "Alisson", "José", "Pedro", "Antônio", "Joana"))
