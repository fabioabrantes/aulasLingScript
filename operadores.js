let nome = 'fabio abrantes diniz'
let novoNome = nome.replace(/a/g, 'i')
console.log(novoNome)
console.log(nome)

function greetings(name){

  
  let newName = name || 'usuário'
  console.log('bem vindo ', newName);
}

greetings('fabio')

// if else
let value = NaN
if(value){
  console.log(value)
}else{
  console.log('erro: valor incorreto')
}

// ternario
let idade = 20;

(idade >=18) ? console.log('maior de idade') : console.log('menor de idade')


let day = '1';
// switch
switch(day){

  case 1:
    console.log('domingo')
    break;
  case 2:
    console.log('segunda')
    break;
  default:
    console.log('outro dia')

}

// for

for(let i=0;i<10;i++){
  console.log(i)
  console.log('loop infinity')
}

console.log("ultimo valor de i ", i);

// for .. of
const array = [1,2,3,4];

for (const value of array) {
  console.log(value);
  
}
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  console.log(element);
}

// for ... in
const fabio = {
      idade: 35,
      sobreNome: 'abrantes diniz'
}
//console.log(fabio.idade)

let props;
for ( props in fabio) {
    console.log(typeof props, fabio[props], props); 
}

