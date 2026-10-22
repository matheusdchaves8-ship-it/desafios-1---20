let notas = [8, 7, 9, 4, 6, 10];

if (notas.every (notas => notas >0 == notas <= 10)) {
    console.log ("Todas estão corretas")
}
else{
    console.log("inválido")
}