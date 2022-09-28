let n1, n2, n3, media, pn1, pn2, pn3, p1, p2, p3
p1 = prompt("O valor da primeira nota é: ")
p2 = prompt("O valor da segunda nota é: ")
p3 = prompt("O valor da terceira prova é de: ")

pn1 = 2
pn2 = 3
pn3 = 5
n1 = p1 * pn1
n2 = p2 * pn2
n3 = p3 * pn3
media = (n1 + n2 + n3) / 3

alert("O valor da média é: " + media)