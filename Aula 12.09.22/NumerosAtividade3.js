let A, B, C, D, A1, B2, C3, D4
       A = prompt("Digite seu número A aqui: ")
       B = prompt("Digite seu número B aqui: ")
       C = prompt("Digite seu número C aqui: ")
       D = prompt("Digite seu número D aqui: ")

       A1 = A * A
       B2 = B * B
       C3 = C * C
       D4 = D * D
       if(C3 >= 1000){
       	alert("\nO quadrado do Terceiro número é: " + C3)
       }
       else{
       	alert("Primeiro número é: " + A + "\nO quadrado do Primeiro número é: " + A1)
       	alert("\nSegundo número é: " + B + "\nO quadrado do Segundo número é: " + B2)
       	alert("\nTerceiro número é: " + C + "\nO quadrado do Terceiro número é: " + C3)
       	alert("\nQuarto número é: "+ D + "\nO quadrado do Quarto número é: " + D4)
       }