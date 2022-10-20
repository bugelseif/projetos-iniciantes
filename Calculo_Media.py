nome=(input('Digite o seu nome:  '))
n1=int(input('Digite a primeira nota:  '))
n2=int(input('Digite a segunda nota:  '))
media=int (n1 + n2) / 2
recuperacao=int (media) - 7

if media >= 7:
    print('Parabéns {}, Você passou, sua média é {}'.format(nome) .format(media))
elif media > 3 <7:
    print('{}, você está de recuperação precisando de {}'.format(nome) .format(recuperacao))
elif media < 3:
    print('{}, infelizmente você foi reprovado, consulte a secretaria para rematricula'.format(nome))
