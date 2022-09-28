let C, N, E, A, ST, S
       C = prompt("Código do Funcionário: ")
       N = prompt("Carga Horária: ")
       
       S = N *10
       if(N > 50){
       E = N - 50
       A = E * 20
       ST = S + A
       alert("Salário é igual: " + ST)	
       }else{
    	       alert("O salário é igual a: " + S);}