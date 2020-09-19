let listNameUser =['fabio','carlos']
let listNameUser2 = new Array()
listNameUser2.push('fabio','carlos','joao','julia')
listNameUser2[3] ='lucas'

let x = []
let y = [,,,,]
console.log(y.length)
console.log(x.length)

let name = listNameUser[1]
console.log(name)

for (let index = 0; index < listNameUser2.length; index++) {
  const element = listNameUser2[index];
  console.log(element)
  
}

for (const element of listNameUser2) {
  console.log(element)
}

// iterando em array contendo objetos
let users = [
  {name:'fabio',id:1},
  {name:'carlos',id:2},
  {name:'lucas',id:3}
]
for (const user of users) {
  console.log(user)
  console.log(user.name,user.id)
  console.log(user['name'], user['id'])
}

console.log(users[0].name)
for (let index = 0; index < users.length; index++) {
  let element = users[index];
  console.log(element['name'], element['id'])
  console.log(element.name, element.id)
}

