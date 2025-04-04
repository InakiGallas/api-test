import { AsyncLocalStorage } from "async_hooks"
import { Console, error } from "console"
import fs, { readFile } from "fs"

// console.log("------------ES SINCRONICO-------------")
// function fsSync(){
//      const data = fs.readFileSync("doc.txt", "utf-8")
//     //  console.log("Data en fs sincronico: ", data)
//     //  const writeData = fs.writeFileSync("doc.txt", "Bienvenidos a TP2!")
//     //  const dataUpdate = fs.readFileSync("doc.txt", "utf-8")
//     //  console.log("Data actualizada: ", dataUpdate)

// }



// console.log("------------FIN ES SINCRONICO-------------")



// console.log("---------ES CALLBACK-----------")
// // //CALLBACK: es una funcion que se pasa como parametro de otra funcion
// //es un error llenar todo de callbacks porque se vuelve imposible de leer y escalar

// // function callback(a, b, cb){
// //     return cb(a,b)
// // }

// // function suma(x, y){
// //     return x + y
// // }

// // console.log("Callback: ", callback(10, 5, suma))

// function fsCallback() {
//     fs.readFile("doc.txt","utf-8", (err, data) =>{
//         if(data) console.log("Data en fs callback:", data)
//         if(err) console.log("Error en la operacion de callback con FS.", err)    
//             fs.writeFile("doc.txt", "TextoPisado", (err, data) =>{
//                 console.log(data)
//                 fs.readFile("doc.txt","utf-8", (err, data) => {
//                     console.log("Data actualizada en fs callback: ", data)
//                 })
//         })
//     })  
// }
// fsCallback()

// console.log("//-------FIN FS CALLBACK---------//")

//Promesas
// console.log("//------- FS PROMESAS---------//")
// function fsPromisesJS(algoBool){

//     return new Promise((resolve, reject) => {
//         if(algoBool) {
//             console.log("Se resolvio correctamente")
//         }else if(reject){
//          console.log("Ocurrio un error en la promesa.")
//         }
//     })
// }
// fsPromisesJS(true)

// //Peticion a una API
// //fetch --> es una funcion de Js que permite hacer 
// const fetchApi = fetch("https://rickandmortyapi.com/api/character")
// const objPromises = fetchApi
//                         .then(res => console.log(res))
//                         .catch(err => console.log("Error en un fetch", data))
//                         .finally(() => console.log("Finally..."))

// console.log("Fetch API Rick y Morty: ", fetchApi)

// function fsPromises(params){
//     fs.promises.readFile("doc.txt", "utf-8")
//         .then((res) => console.log(res))
//         .then(() =>{
//             fs.promises.writeFile("doc.txt","Funcion con Promesa y FS")
//         })
//         .then(() =>{
//             fs.promises.readFile("doc.txt", "utf-8")
//         })
//         .then((result) =>{
//             console.log("nuevo texto:", result)
//         })
//         .catch((err) => console.log(err))
// }
// fsPromises()
// console.log("//-------FIN FS PROMESAS---------//")

//ASYNC AWAIT

console.log("-----------------FS CON ASYNC / AWAIT--------------")
async function fsAsyncAwait() {
   try {
    const readData = await fs.promises.readFile("doc.txt", "utf-8")
    console.log("readData: ",readData)
    const writeData = await fs.promises.writeFile("doc.txt", "Nuevo texto con Asyn Await")
    console.log("WriteData: ",writeData)
    const readData2 = await fs.promises.readFile("doc.txt", "utf-8")
    console.log("readData2: ",readData2)

   } catch (error) {
        console.log("Error en el cath de async: ", error)
   }
}

fsAsyncAwait()
console.log("")
