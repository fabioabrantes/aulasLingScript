let average = function(n1,n2,n3){
  let average = (n1 + n2 + n3)/3  
  console.log(average);
}

let teacher = {
  name:'fabio',
  id:1,
  subjects: ['LS','PDM','GTIC'],
  calcAverage: average,
  imprimir(){
    console.log(this.name)
  },
  matricula: '123rrr'
}
teacher.name ='abreu'
teacher.cpf = '000.000.000.-00'
teacher['cpf2'] = '111.222.333-44'

let props = Object.keys(teacher);
console.log(props);
for (const prop of props) {
  console.log(teacher[prop])
}


console.log(teacher)
let nome = teacher['name'];
/* let name = teacher.name // teacher['name']
console.log(name)
teacher.calcAverage(10,50,100);

for (const subject of teacher.subjects) {
  console.log(subject)
} */
/* console.log(teacher.name)
console.log(teacher['name']) */

for (let props in teacher) {
  console.log(props)
  console.log(teacher[props])
  
}

// usando o new Object()
let teacher2 = new Object();
teacher2.name = 'fabio'
teacher2.id =3;
teacher2.subjects = ['ls','pdm']

console.log(teacher2)

// criando objeto usando funções
function Teacher (name,id,subjects){
    this.name = name,
    this.id = id,
    this.subjects = subjects
}

let teacher3 = new Teacher('fabio',1,['ls','pdm'])
console.log(teacher3)