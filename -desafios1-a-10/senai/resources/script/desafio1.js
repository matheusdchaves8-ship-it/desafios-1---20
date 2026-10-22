let senha = "matheus"
let recebe = prompt ("Digite a senha");
let tentativas = 3 
while(tentativas > 0) {
    tentativas = tentativas -1; 
    if (recebe.toLowerCase().trim() === senha.toLowerCase().trim()){
        alert("Senha correta");
        break;
    }
else{
    if (tentativas === 0) {
     alert("Numero de tentativas esgotado, acesso negado");
     break;
    }

    alert("senha incorreta, tentativas restantes: ".concat(tentativas));
    recebe = prompt ("Digite novamente sua senha");
}
}