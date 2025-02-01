const firstName = "Paulo"
const anotherName = "Carneiro"
let firstName2: string = "Dylan"; // type string

firstName2 = "33"

function greeting(name: string, another: string){
  console.log("Olá, " + name + " " + another)
  
}

console.log(typeof firstName2)

greeting(firstName, anotherName)