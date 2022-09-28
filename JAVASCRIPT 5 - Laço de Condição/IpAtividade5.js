let ip

ip = prompt("Digite o indice de poluição: ")

if(ip >= 0.3 && ip < 0.4){
    alert("Industria do 1º grupo suspenda suas atividades!")
} else if (ip >= 0.4 && ip < 0.5) {
    alert("Industria do 1º e 2º grupo suspendam suas atividades!")
} else if (ip >= 0.5) {
    alert("Industrias de todos os grupos suspendam suas atividades!")
} else if (ip >= 0.05 && ip <= 0.25) {
    alert("Tudo nos conformes")
} else {
    alert("Preocupante")}