console.log("Hola mundo")

let a = 4
console.log(a)
console.log(typeof(a))

let b = 234.6
console.log(typeof(b))

let required = true
console.log(typeof(required))
console.log(typeof(!required))

// No podemos re-asignar variables con let PERO si con var
var c = "Luis H. Men"
console.log(typeof(c))

var c = a + b
console.log(c)

// Si la variable se define solo una vez con let y después sin let, funciona.
let v = "Re asignando"
v = a + b
console.log(v)
