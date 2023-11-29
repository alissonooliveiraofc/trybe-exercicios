def average(list):
    """Retorna a média dos números de uma lista"""
    sum = 0
    for number in list:
        sum += number
    return sum / len(list)


print(average([1, 2, 3, 4, 5]))
