//PARTE 5

function clicou(){
  //document.getElementById("agradecimento");
  document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
  //console.log(document.getElementById("agradecimento"))
  //alert("Obrigado por clicar")
}

function redirecionar(){
  window.open("https://globallab.org/en/#.X76N4VlKjeQ"); // abre em outra aba
  window.location.href = "https://globallab.org/en/#.X76N4VlKjeQ"; // abre na mesma janela
}

function trocar (elemento){
 // document.getElementById("mousemove").innerHTML = "Obrigado por Passar o mouse";
 elemento.innerHTML =  "Obrigado por Passar o mouse";
  //alert("trocar texto");
}

function voltar (elemento){
 // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
  alert ("Pagina carregada")
}

function funcaoChange(elemento){
  console.log(elemento.value);
}

// as funções trocar e voltar foi implemenada de duas formas, a primeira buscando pelo id definido no arquivo html, mas essa abordagem eu teria que ter uma funcao para cada id diferente, mas usando o conceito de this e passando como parametro para a funcao o id pode ser ate eliminado para essa funcionalidade.

//PARTE 4
/*
function soma(n1, n2){
  return n1+n2;
}


function validaIdade (idade){
  var validar;
  if (idade >=18){
    validar = true
  }else {
    validar = false
  }
  return validar;
}

var idade = prompt (" Qual é a sua idade?");
console.log (validaIdade(idade));

*/

//alert (soma(5,10));
/*
function setReplace(frase, nome, novo_nome){
  return frase.replace(nome, novo_nome)
}
alert (setReplace("vai Japão", "Japão", "Brasil"));
*/



/* PARTE 3 CONDICIONAIS, LAÇOS E REPETIÇÕES E DATA
var d = new Date();
//alert(d)
console.log (d.getDate(), + d.getMonth()+1, d.getFullYear())
*/

/*
var count;
for (count=0; count <=5; count++){
  alert(count);
}
*/

/*
var count = 0;
while(count <5){
  console.log(count);
  count = count+1;
  //ou a linha de cima por count++;
};
*/

/*
var idade = prompt("Qual sua idade?")
//var idade = 18;
if (idade >= 18) {
  alert("Prossiga voce é maior de idade");
} else {
  alert("Conteudo bloqueado voce é menor de idade");
}
*/

/*
PARTE 2 LISTA DE DICIONARIO
//var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]//lista de dicionario ou objeto json.
//console.log(frutas)
//console.log(frutas[1].nome)


//var fruta = {nome: "maça", cor: "vermelha"}//dicionario ou objeto json.
//console.log(fruta)
//console.log(fruta.nome)
*/

/*
PARTE 2 LISTA
var lista = ["maça", "pera", "laranja"];
//lista.pop(); // retira o ultimo elemento.
//lista.push("uva"); // coloca itens
//console.log(lista);
//console.log (lista.length); //retorna o numero de itens no array.
console.log(lista.reverse()) // tras os elementos de forma inversa na lista do fim para o começo.
console.log(lista.toString())
console.log(lista.join(" - "))
//alert(lista[1]);
*/

/*
PARTE 1
var nome = "Alessandro Fonseca";
var idade = 43;
var idade2 = 10;
var frase = "O brasil ta uma merda!";
//alert (nome + " tem " + idade + " anos ");
//alert (idade + idade2);
console.log(nome);
console.log(idade + idade2);
//console.log(frase);
console.log(frase.replace("brasil", "Argentina"));
//alert(frase.replace("brasil", "Argentina"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
*/
