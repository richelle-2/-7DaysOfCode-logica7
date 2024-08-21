const area = prompt("você quer seguir para area de 'front-end' ou de 'back-end'?digite o nome da area:")
let linguagem = "";
if(area ==="front-end"){
    linguagem = prompt("Que bom que escolheu seguir com ${area}',gostaria de aprender react ou vue?");
}else if(area === "back-end"){
    linguagem = prompt("Que bom que escolheu seguir com${area},gostaria de aprender 'c#' ou 'java'?");
}else{
    linguagem = prompt("você provavelmente digitou algo errado!!");
}
const fullstackOuespecialidade = prompt("Digite 1 para especialidade e 2 para fullstack");
if(fullstackOuespecialidade == 1){
    alert("continue se especializando em${area},ainda tem muita coisa para se aprender em${linguagem!!!}");
}else if(fullstackOuespecialidade == 2){
    Alert("chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se torna um fullstack!");
}else{
    Alert("voce nao inseriu um valor valido");
}
let msg = prompt("tem mais alguma tecnologia que voce gostaria de aprender?responda ok se sim!!!");
enquanto (msg === "ok"); {
   let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`);
    msg = prompt("tem mais alguma tecnologia que você gostaria de aprender? responda ok se sim");
}
const perguntaFinal = prompt("tem mais alguma tecnologia que você gostaria de aprender? responda ok se sim")
 
if(perguntaFinal === "nao" ) {
    Alert("obrigada por jogar, continue sua josrnada e tera um futuro incrivel!");
    breck;
}