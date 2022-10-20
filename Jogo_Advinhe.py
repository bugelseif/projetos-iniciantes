from random import randint

print("### INICIANDO O JOGO ###")

aleatorio = randint(1, 10)
chute = 0
chances = 3

while chute != aleatorio:
    chute =input('Chute um número entre 1 e 10:  ')
    if chute.isnumeric():
        chute = int(chute)
        chances = chances - 1
        if chute == aleatorio:
            print('Parabéns, você acertou, vá tomar um cafezinho!')
            break
        else:
            if chute > aleatorio:
                print('Você errou, tente um número menor!')
            else:
                print('Você errou, tente um número maior!')
        if chances == 0:
            print('Suas chances acabaram, você perdeu!')
            print('O número era {}'.format(aleatorio))        
            break

print('### FIM DO JOGO ###')
