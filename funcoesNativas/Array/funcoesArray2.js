//SOME() e every()
let array = [, true, 'fabio',3,{birth:33,name:'rebeca'}]
let sohNumbers = function(element){
  return typeof element === 'number'
}

let result = array.some(sohNumbers)
console.log(result)
let result2 = array.every(sohNumbers)
console.log(result2)

function checkFruitExist(array, value){
  return array.some((element)=> element === value)
}

let fruits = ['apple', 'banana', 'manga', 'guava'];
console.log(checkFruitExist(fruits,'goiaba'));

// indexOf() e lastIndexOf() ele compara === 
let arr = ["4", 5, 10, 20, 35, "4", 5]
let indice = arr.indexOf(4,0)
let indice2 = arr.lastIndexOf(4,11)
console.log(indice,indice2)

let index = [];
let arrayChar = ['a', 'b', 'a', 'c', 'a', 'd'];
let element = 'a';
let idx = arrayChar.indexOf(element);
while (idx != -1) {
  index.push(idx);
  idx = arrayChar.indexOf(element, idx + 1);
}
console.log(index);

// Encontrar se um elemento existe ou não e atualizar o array
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

let array = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(array, 'spinach');
updateVegetablesCollection(array, 'spinach');

// find() =================================================================
const array = [5,7,2,12,5,9]
let found = array.find((element)=> element > 33)
console.log(found)

//Encontrar um objeto em um array por uma de suas propriedades
const inventory = [
  {name: 'maças', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cerejas', quantity: 5}
];

/* function isCherries(fruit,index, array) {
  return fruit.name === 'cerejas';
} */

const result =inventory.find((element)=> element.name === 'cerejas')
console.log(result.name, result.quantity);
//const result = inventory.find( fruit => fruit.name === 'cerejas' );
console.log(result)

// includes e findIndex()
let vegetables = ['potato', 'tomato', 'chillies', 'green-pepper'];

let vegetable = 'tomato';
let existsVegetable = vegetables.includes(vegetable);
if(existsVegetable){
  let indice = vegetables.findIndex((element)=>element === vegetable);
  console.log(indice);
}else{
  vegetables.push(vegetable)
}
console.log(vegetables)

// join, concat e toString
let vegetables = ['potato', 'tomato', 'chillies', 'green-pepper'];
let resultado = vegetables.join()
console.log(resultado, typeof resultado)

let fruits = ['orange','apple', 'banana']
let results = vegetables.concat(fruits, [1,2,3],'fabio',{name:'jose'},7)
console.log(results)
let metodo1 = function(element){
  let valor = element;
  if(typeof element === 'object'){
    valor = element.name
    }
 
 return valor
}

let newArray = results.map(metodo1)

let result2 = newArray.join('-')
console.log(result2)
let result3 = newArray.toString()
console.log(result3)