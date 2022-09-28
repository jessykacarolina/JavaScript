let anos, meses, dia, dias

anos = prompt("Digite quantos anos tem: ")
meses = prompt("E quantos meses: ")
dia = prompt("E quantos dias: ")

dias = (anos * 365) + (meses * 30) + dia
alert("\nSeus dias são de: " + dias)