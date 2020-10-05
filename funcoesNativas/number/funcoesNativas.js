let num1 = parseInt("5")
let x = 5
let y = x.toString(2)
console.log(y)
// tofiexed e toprecision

let num2 = 1122.545676867
console.log(num2.toFixed(3)) // sem parâmetro entende que é zero
console.log(num2.toFixed(1))
let num3 = 123.45565
console.log(num3.toPrecision()) // padrão zero
console.log(num3.toPrecision(1))
let numPrecision = num3.toPrecision(6)

let average = parseFloat(numPrecision) /3
let rootSquare = Math.sqrt(average)
console.log(average)
console.log(rootSquare.toFixed(1))

// area da circunferência
let raio = 2
let area = Math.PI * Math.pow(raio, 2)
console.log(area)
