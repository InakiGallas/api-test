// Operadores de comparacion
// console.log(10 == "10") //igualdad
// console.log(10 === "10") //igualdad estricta
// console.log(10 != "10")
// console.log(10 > "10")
// console.log(10 < "10")

//Operadores logicos
const esMayor = (10 > 5)
const esMenor = (10 < 5)
let condition = (100 > 50)
//Estructuras condicionales
//IF
if (esMayor) {
    console.log("Se cumple la condicion!")
}

//IF ELSE 
if (condition) {
    console.log("Se cumple la condicion!")

} else {
    console.log("NO Se cumple la condicion!")
}


//IFELSEIF
if (condition) {
    console.log("Se cumple la tercera condicion!")

} else if (condition === false) {
    console.log("La condicion es false")
} else{
    console.log("Ha ocurrido un error en el servidor.")
}

//SWITCH
const key = "azul"
//break tambien puede ser un return
switch (key) {
    case "verde":
        console.log("Es verde")
        break;

    case "amarillo":
        console.log("Es amarillo")
        break;
    
    case "rojo":
        console.log("Es rojo")
        break;
    
    case "violeta":
        console.log("Es violeta")
        break;
    
    case "gris":
        console.log("Es gris")
        break;
    
    case "azul":
        console.log("Es azul")
        break;
        
    default:
        console.log("No Matchea con ningun color")

        break;
}
   
//Operador ternario -> (condicion) ? "Resultado2" : "Resultado2"
const edad = 18
const compararEdad = (edad == 18) ? "Es mayor de edad" : "Es menor de edad"
console.log(compararEdad) 

//Nullish coalescing
//Operador de Coalescencia nula
//Evalua valores nulos o undefinied
const saludo1 = null ?? "Hola a todos!"
const saludo2 = "Hola mundoo!" ?? "Hola a todos!"
console.log("Saludo1:", saludo1 )
console.log("Saludo2:", saludo2 )

//Template string --> `` --> ALT + 96
const templStng1 = 10
const templStng2 = 100

console.log("Comillas dobles", templStng1)
console.log('Comillas simples', templStng2)
console.log(`Comillas invertidas me permiten unificar el mensaje y el valor de la variable. EJEMPLO: ${templStng1} y ${templStng2}`)

//setInterval
setInterval(() => {
    console.log("setInterval...")
}, 3000);

// //setTimeout
setTimeout(() => {
    console.log("setTimeOut...")
}, 2000);