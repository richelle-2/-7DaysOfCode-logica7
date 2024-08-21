let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let limpeza = [];
let item = [];
let categoria = [];

let inserirMais = "sim";

while(inserirMais != "nao"){
 inserirMais = prompt("voce deseja adcionar um item na lista de compras?responda 'sim ou 'nao");
 while(inserirMais = "sim" && inserirMais != "nao"){
    alert('operacao nao conhecida!');
    inserirMais = prompt("voce deseja adcionar um item na lista de compras?responda 'sim' ou 'nao'");
 }
 if(inserirMais === "nao"){
    break;
 }
 item = prompt("Qual item você deseja inserir?");
 categoria = prompt("Em qual categoria esse item se encaixa:'frutas' , 'laticínios' , 'doces' , 'congelados' ou 'limpeza?'");
}
if(categoria === 'frutas') {
    frutas.push(item);
}else if(categoria === 'laticinios'){
    laticinios.push(item);
}else if(categoria === 'doces'){
    doces.push(item);
}else if(categoria === 'congelados'){
    congelados.push(item);
}else if(categoria === 'limpeza'){
    limpeza.push(item);
}else{
    alert('insira uma categoria valida');
}
 alert('lista de compras:\n frutas${frutas}laticinios:${laticinios}\n doces:${doces}\n congelados:${congelados}\n{limpesa}');