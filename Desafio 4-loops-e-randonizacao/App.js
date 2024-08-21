const nemeroAdinhacao = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let rampa = "";
let acertou = false;

for(let contador = 0; contador<3; contador ++){
    rampa = prompt("Tente advinhar o número de 0 a 10:");
    if(rampa == numeroAvinhacao) {
        alert('Parabéns voce acertou! o numero era ${numeroAdivinhacao}.');
        'certo' = true;
        break;
    }else {
   alert("errado!");
    }
}

if(!certo){
    alert('infelizmente,voce nao acertou. o numero era${numeroAdivinhacao!');
}