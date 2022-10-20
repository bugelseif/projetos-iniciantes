def soma():
    return(a + b)

def subtracao():
    return(a - b)

def mutiplicacao():
    return(a * b)

def divisao():
    return(a / b)

a=int(input('Digite o valor do primeiro número:  '))
b=int(input('Digite o valor do segundo número:  '))

choice=1
while choice !=0:
    print('0 - Sair da Calculadora')
    print('1 - Soma')
    print('2 - Subtração')
    print('3 - Multiplicação')
    print('4 - Divisão')
    choice=int(input('Digite o valor da opção desejada:  '))
    if choice == 1:
        print('Resultado:  ',soma())
        break
    elif choice == 2:
        print('Resultado:  ',subtracao())
        break
    elif choice == 3:
        print('Resultado:  ',mutiplicacao())
        break
    elif choice == 4:
        print('Resultado:  ',divisao())
        break
    elif choice == 0:
        print('Saindo da calculadora')
    else:
        print('Opção inválida')
        break