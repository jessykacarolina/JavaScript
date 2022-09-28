let d, x, y
x = prompt("Escreva o valor de X: ")
y = prompt("Escreva o valor de Y: ")

d = (Math.sqrt((x*2-x*1)**2 + (y*2-y*1)**2)).toFixed(2)
alert("O valor da distância é de: " + d);