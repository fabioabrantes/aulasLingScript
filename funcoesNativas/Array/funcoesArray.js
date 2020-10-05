let numbers = [2,4,6,8,9]
let media = function (element, indice, arr) {
  console.log(element)
  console.log(indice)
  console.log(arr)
}
//numbers.forEach(media)
numbers.forEach((element,indice) =>console.log(element, indice))

function media(callback, num) {
  let media =callback/num
  return media || 0;
}
function soma(){
  let soma = 0;
  for (let index = 0; index < arguments.length; index++) {
   soma = soma + arguments[index];
 }
 return soma;
}
let resultado = media(soma(10,30,50,90,100),5)
console.log(resultado)

// forEach(funcao(ovalorAtual,[index, array]))

let arrayNum = [1,2,3,4,5]
let media = 0;
let s = 0;
function soma(element,indice,array){
    s = s + element;
    
    console.log('valoratual ', element,'index ', indice)
    
    if((indice + 1) == array.length){
      console.log('soma ',s)
      media = s /array.length
      console.log('media ',media)
    }
}
arrayNum.forEach(soma);

// FILTER
let numbers2 = [2,4,6,8,9,8,10,11]

let result = numbers2.filter((element) => element % 2 != 0)
console.log(result)
// MAP
let square = numbers2.map((element) => element*element)
console.log(square)

let products = [
  {
      name : "Smartphone 5' Android",
      price : 1200
  },
  {
      name : "Notebook 4GB Windows 10",
      price : 2100
  },
  {
      name : "SmartTV 50' LED",
      price : 8700
  }
];

var productsWithAdjustment = products.map(({name, price},indice) =>{
  let obj = {
        name,
        price:price * 1.15
  }
  return obj;
});
console.log(productsWithAdjustment)