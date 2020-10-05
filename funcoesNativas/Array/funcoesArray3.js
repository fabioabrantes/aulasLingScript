// push, unshift, pop e shift
let vegetables = ['potato', 'tomato', 'chillies', 'green-pepper'];
vegetables.push('beans')
console.log(vegetables)
vegetables.unshift('broccoli')
console.log(vegetables)
vegetables.pop();
vegetables.pop();
console.log(vegetables)
vegetables.shift();
vegetables.shift()
console.log(vegetables)
// slice 
let vegetables = ['potato', 'tomato', 'chillies', 'green-pepper'];
let subVegetables = vegetables.slice(1,4)
console.log(subVegetables)

// Usando slice para criar novoCarro a partir de meuCarro.
let myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
let myCars = [2, 'cherry condition', 'purchased 1997'];
myCars.unshift(myHonda)
console.log(myCars)
let newCars = myCars.slice(0, 2);
let newCarString = JSON.stringify(newCars)
console.log(newCarString, typeof newCarString)

// Exibe os valores de meuCarro, novoCarro, e a cor de meuHonda
//  referenciado de ambos arrays.
console.log('myCar = ', JSON.stringify(myCars));
console.log('newCar = ', JSON.stringify(newCars));
console.log('myCar[0].color = ', myCars[0].color);
console.log('newCar[0].color = ' , newCars[0].color);

// SPLICE --------------
let myCars = [2, 'cherry condition', 'purchased 1997', {name:'fabio'},5, 8];
let elementRemoveds = myCars.splice(1,2,'celta','ka','corola')
console.log(elementRemoveds,myCars)

// REDUCE
let arr = [1, 2, 3, 4]

let somaFuncao = function (resultadoSoma, atual, indice, _arr) {
  console.log("i: ", indice)
  console.log(_arr)
  console.log("acumulador: ", resultadoSoma, " --- atual: ", atual)
  return resultadoSoma + atual
}
let soma = arr.reduce(somaFuncao,0) 
console.log(soma)
console.log(arr)


const nomes = ["Daniel", "Maria", "Joana", "João",'Elisa']

let nomesPorOrdem = nomes.reduce(function (objetoResultante, nomeAtual) {

  let primeiraLetra = nomeAtual[0]
  if (primeiraLetra in objetoResultante) { //obj['x'] ou obj.x
    objetoResultante[primeiraLetra] ++
  } else {
    objetoResultante[primeiraLetra] = 1
  }
  return objetoResultante
}, {})

console.log(nomesPorOrdem)


const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9]
//const numerosUnicos = [1, 3, 4, 5, 8, 9]
const numerosUnicos = numeros.reduce( (numerosUnicos, currentValue)=>{

    if(numerosUnicos.indexOf(currentValue) < 0){
      numerosUnicos.push(currentValue);
    }

    return numerosUnicos;
}, []);

console.log(numerosUnicos);

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
  { name: 'fabio', age: 21 },
];
/* eu quero fazer
{
  "20": ['Max','Jane'], 
  "21":['Aice']
} */
let result = people.reduce( (objeto, currentObj)=> {
  let valor = currentObj.age;
  if (!(valor in objeto)) {
    objeto[valor] = [];
  }
  objeto[valor].push(currentObj.name);
  return objeto;
}, {});

console.log(result)

