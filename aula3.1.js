// declarando funções
let x = greetins("fabio", 70, 80);
console.log(x);


//console.log(average);
// chamar ou executar a função
let x = greetins("fabio", "70", 80);
console.log(x);

// declaração de expressoes de funcoes com funções anônimas

let greetins = function (name, num1, num2) {
  let average;
  console.log("ola", name);

  if (typeof num1 == "number" && typeof num2 == "number") {
    average = (num1 + num2) / 2;
  } else {
    average = 0;
  }

  console.log(average);
  return average;
};
// chamando uma funcao
let media = greetins('abreu', 60,50);
console.log(media);

// funções aninhada
function calcularPotencia(value){
  let x = value;
  
  function potenciaCubo(){
    x = value**3;
  }
  potenciaCubo();
  // return x;
  return document.write(x);

}

let result = calcularPotencia(5);
console.log(result);

// arrow function
let x = (name, num1, num2) =>{
  
  let average;
  console.log("ola", name);

  if (typeof num1 == "number" && typeof num2 == "number") {
    average = (num1 + num2) / 2;
  } else {
    average = 0;
  }

  console.log(average);
  return average;

}

function greetins(name, num1, num2) {
  let average;
  console.log("ola", name);
  if (typeof num1 == "number" && typeof num2 == "number") {
    average = (num1 + num2) / 2;
  } else {
    average = 0;
  }

  console.log(average);
  return average;
}
// funcoes callback
/* function writeAverage(callback){

  let media = callback('fabio',40,50);
  console.log("a media é", media);
}

writeAverage(greetins); */

// funçoes como método
let Saudacao = {
  informacao:"bom dia sou a saudação",
  saudar:greetins,


}
let media = Saudacao.saudar('fabio',70,100);
console.log(media);

// funções com propriedades
function square(value){
  this.x = Math.sqrt(value),
  square.name = 'o valor da raiz quadrada é',

  function writeSquare(){
    console.log(square.name);
    console.log(this.x);
  }
  
  writeSquare();
}

square(25);

let valor = 100;
// funções usando a palavra arguments
function add(){
  console.log(arguments)
  let soma = valor;
  for (let i = 0; i < arguments.length; i++) {
    soma = soma + arguments[i]
  }
  console.log(soma)
}
add();
add(1);
//add("fabio", 'abreu','aaaaa');
add(1,2,3,4,5);