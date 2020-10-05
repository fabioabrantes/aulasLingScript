let dataNow = Date.now();
console.log(dataNow)
let dataPrev = Date.parse('12/10/2010')
console.log(dataPrev)

// getDate
let Xmas95 = new Date();
let day = Xmas95.getDate();
let dayMonth = Xmas95.getDay();
let year = Xmas95.getFullYear();
let milliseconds = Xmas95.getMilliseconds();
let month = Xmas95.getMonth();
let minute = Xmas95.getMinutes();
let sec = Xmas95.getSeconds();
let time = Xmas95.getTime()
console.log(day,dayMonth,year,milliseconds,month,minute,sec,time);

// comparação de duas datas
let x = '2019-10-1'
let y = '2019-10-1'
console.log(x === y)
const data1 = new Date(2019, 10, 1)
const data2 = new Date(2019, 10, 1)
console.log(data1 === data2) // nao posso comparar objetos entre si
console.log(data1.getTime() === data2.getTime())

//Calcular a diferença entre duas datas pode ser feito de diferentes forma
const data1 = new Date(2019,10,1)
const data2 = new Date(2019,10,2)
const umDia = 1000*60*60*24
console.log((data2.getTime() - data1.getTime()) / umDia)
//Para calcular em horas poderíamos fazer dessa forma:
const data1 = new Date(2019, 0, 1)
const data2 = new Date(2019, 0, 2)

console.log((data2.getDate() - data1.getDate()) * 24)
// ================ getTime() ==========================
let end, start;

start = new Date();
for (let i = 0; i < 1000000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');





