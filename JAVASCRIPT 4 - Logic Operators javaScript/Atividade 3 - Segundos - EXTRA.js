let segundos, horas, minutos

segundos = prompt("Qual a duração de um evento em uma fábrica expressada em segundos: ")

horas = (segundos / 24).toFixed(0);
minutos = (segundos / 60).toFixed(0);
segundos = (segundos - (horas * 24) + (minutos * 60)).toFixed(0);
alert("\nSuas horas são de: " + horas + "\nSeus minutos são de: " + minutos + "\nSeus segundos são de: " + segundos)