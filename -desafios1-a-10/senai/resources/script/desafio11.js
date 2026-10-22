let saldo = 500;
let saque = 150;

if (saque > saldo){
    alert("saldo insuficente")
}
else{
    saldo = saldo - saque;
    alert(`Saque realizade com suceso ${saldo}`);
}
