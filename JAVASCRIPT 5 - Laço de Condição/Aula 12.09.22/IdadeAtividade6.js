let idade

idade = prompt("Digite a idade do nadador: ")

if(idade >= 5 && idade <= 7) {
    alert("Infantil A")
}else if(idade >= 8 && idade <= 11) {
    alert("Infantil B")
}else if(idade >= 12 && idade <= 13) {
    alert("Juvenil A")
}else if(idade >= 14 && idade <= 17) {
    alert("Juvenil B")
}else if(idade >= 18) {
    alert("Adultos")
} else {
    alert("Muito novo")}