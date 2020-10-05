let  name = 'fabio'
console.log(name.length)
let i =0
for (let index = 4; i < name.length; index--) {
    name[index] = name[i]
    console.log(name[index])
    i++
}
console.log(name.toUpperCase())

// replace
let frase = "Ana ama banana"
let mudarFrase = frase.replace('ana','ema')
console.log(mudarFrase)

//Usando indexOf() para contar as ocorrências de uma letra numa string

let count = 0;
let str = 'xaves é xivas e xovas'

let posicion = str.indexOf("c")

while ( posicion != -1 ) {
   count++;
   posicion = str.indexOf( "x",posicion + 1 )
}

console.log(count)
console.log(posicion)

// includes 
let str2 = "Fabio é professor de ADS do ifpb"
if(str2.includes('IFPB'.toLowerCase())){
    console.log('professor do ifpb')
}else{
    console.log('professor não é do ifpb')
}

// slice
const str4 = 'The quick brown fox jumps over the lazy dog.';
const newString = str4.slice(31)
console.log(newString);
console.log(str4);
console.log(str4.slice(4, 19));
console.log(str4.slice(-4));
console.log(str4.slice(-9, -5));

let x = 'string'
for (let index = 0; index < x.length; index++) {
   console.log(x[index])
    
}

// substring
let anyString = "Mozilla";

// Mostra "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));

// Mostra "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));

// Mostra "Mozill"
console.log(anyString.substring(-1,NaN));

// Mostra "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));

// trim
let orig = " raposa            "
let origSemEspaco = orig.trim()
console.log(orig)
console.log(origSemEspaco);
// charAt()
let char = 'raposa'
console.log(char.charAt(5))
// split()
let phrase = 'a raposa marrom rápida pulou o cachorro preguiçoso'
let words = phrase.split('rr')
console.log(words)

for (let index = 0; index < words.length; index++) {
    console.log(words[index])
    
}