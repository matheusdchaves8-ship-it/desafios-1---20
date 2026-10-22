let notas = [7, 5, 10, 3, 8];

while (notas[0] < 0) {
  notas[0] = Number(prompt("Digita uma nota"));
}

notas.forEach(function(nota) {
  alert("Nota: " + nota);
});

if (notas.includes(10)) {
  alert("Tem nota 10!");
}

let ondeTa = notas.indexOf(3);

if (ondeTa !== -1) {
  notas.splice(ondeTa, 1);
  alert("Apaguei a nota 3!");
}

notas.sort(function(a, b) {
  return a - b;
});

alert("Notas organizadas: " + notas.join(", "));