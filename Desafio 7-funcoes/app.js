
alert("Calculadora do jurandi");
const pergunta = prompt("Gostaria de fazer uma continha?'sim' ou 'nao'?");
const conta = [
    "soma",
    "multiplicacao",
    "divisao",
    "subtracao",
    "resto divisao",
    "sair"];

    while (pergunta === "sim" ) {
      const operacao = prompt('Qual o tipo de operacao que voce gostaria de usar? "soma', "multiplicacao", "divisao", "subtracao", "resto divisao", "sair"); 

      if(operacao == "sair" || pergunta == "sair"){
         alert("Até a proxima !!!");
         break;
      }
        num1 = prompt("digite o 1° numero?");
     num2 = prompt("digite o 2° numero?");

     if(Operacao === "soma"){
        alert(soma(num1, num2));
     }else if(operacao === "multiplicacao"){
        alert(multiplicao(num1, num2));
     }else if(Operacao === "divisao"){
        alert(divisao(num1, num2));
     }else if(Operacao ==="subtracao") {
        alert(subtracao(num1, num2));
     }else if(operacao === "resto divisao") {
      alert(restoDiv(num1, num2));
     }
   
   }
  
   function soma(num1 , num2){
      let conta = parseInt(num1) = parseInt(num2);
      return conta;
   }
   function multiplicacao(num1, num2) {
      let conta = num1 * nem2;
      return conta;
   }
   function divisao(num1, num2) {
      let conta = num1 / num2;
      return conta;
   }
   function subtracao(num1, num2) {
      let conta = num1 - num2;
      return conta;
   }
   function restoDiv(num1, num2) {
      let conta = num1 % num2;
      return conta;

   }