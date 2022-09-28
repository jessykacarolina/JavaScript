let A, B, C, D, R, S
A = prompt("Digite o Valor de A: ")
B = prompt("Digite o Valor de B: ")
C = prompt("Digite o Valor de C: ")

R = (parseInt(A)+parseInt(B))**2
S = (parseInt(B)+parseInt(C))**2
D = (R + S) / 2
alert("\nO valor de D é: " + D)