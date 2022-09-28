var custo, produto, percentual

custo = prompt("Digite o número do Custo: ")

percentual = prompt("Digite o número do Percentual: ")

produto = parseInt(custo) * (percentual/100) + parseInt(custo)
alert("O Valor do Produto é: " + produto);