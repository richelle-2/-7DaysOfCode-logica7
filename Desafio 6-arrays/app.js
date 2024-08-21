let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let limpeza = [];
let item = [];
let categoria = [];
let remover = [];

    let inserirMais = "sim";
    while(inserirMais != "nao"){
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0 && limpeza.length === 0){
    inserirMais = prompt("voce deseja adicionar uma comida na lista de compras?Responda 'sim' , 'nao' ou 'remover'.");
        }
    while(inserirMais != "sim" && inserirMais != 'nao' && inserirMais != 'remover') {
        alert('Operacao nao reconhecida');
        inserirMais = prompt("você deseja adicionar um item na lista de compras? Responda 'sim' ou 'nao'");
    } 
    if(inserirMais === "nao") {
        breack;
    }
    if(inserirMais === "sim") {
        item = prompt("Qual item voce deseja inserir?");
        categoria = prompt("Em qual categoria esse item se encaixxa:'frutas', 'latinios', 'doces', 'congelados' ou 'limpeza'");
    }
    if(categoria === 'frutas') {
        frutas.push(item);
    }else if(categoria === 'laticinios'){
        laticinios.push(item);
    }else if(categoria === 'doces') {
        doces.push(item);
    }else if(categoria === 'congelados') {
        congelados.push(item);
    }else if(categoria === 'limpeza') {
        limpeza.push(item);
    }else{
        alert("insira uma categoria valida.")
    }
    if(inserirMais === "remover") {
        //removendo itens
    }
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0 && limpeza.length === 0 ){
        alert('Alista vazia !');
    }else {
        remover = prompt('lista de compras:\n frutas ${frutas}\n laticinios: ${laticinios}\n doces:${doces}\n congelados: ${congelados}\n limpeza: ${limpeza}\n Qual produto voce deseja remover?');
    }
    if(frutas.indexOf(remover) != -1 ) {
        frutas.splice(frutas.indexOf (remover),1);
        alert('O item ${remover} foi removido com sucesso!');
    }else if(laticinios.indexOf(remover) != -1){
        laticinios.splice(laticinios.indexOf(remover),1);
        alert('O item ${remover} foi removido com sucesso!');
    }else if(doces.indexOf(remover) != -1){
        doces.splice(doces.indexOf(remover),1);
        alert('O item ${remover} foi removido com sucesso!');
    }else if(congelados.indexOf(remover) != -1){
        congelados.splice(congelados.indexOf(remover),1);
        alert('O item ${remover} foi removido com sucesso!');
    }else if(limpeza.indexOf(remover) != -1){
        limpeza.splice(limpeza.indexOf(remover),1);
        alert('O item ${remover} foi removido com sucesso!');
    }else{
        alert('nao foi possivel encontrar o item dentro da lista!');
    }
}

alert('lista de compras:\n frutas: ${frutas}\n laticinios: ${laticinios}\n doces: ${doces}\n congelados: ${congelados}\n limpeza: ${limpeza}');