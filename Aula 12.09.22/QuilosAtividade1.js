let P, E, M
       P = prompt(" Qual o peso dos tomates?" )
       if(P > 50){
           E = P - 50
           M = E * 4
       alert("Sua multa é R$: " + M.toFixed(2) + "de multa")
       }else{
       alert("\nSua multa é de ZERO ");
    }