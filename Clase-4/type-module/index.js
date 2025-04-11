//type module
import services from "./api.service.js"

//modulo
import http from "http"
import fs, { readFile } from "fs"


let dataApi;

//promesas
// function getDataPromises(){
//     services.apiFetchPromise()
//      .then(data => dataApi = data)

// }
// getDataPromises()

//async await
async function getDataAsyncAwait(){
    const data = await services.apiFetchAsyncAwait()
    dataApi = data
    return data
}
getDataAsyncAwait()

//Servidor HTTP
//Request -> Solicitud
//Response -> Respuesta
const server = http.createServer(async (req, res) =>{
    const {method, url} = req

    console.log("method: ", method)

    if (url === "/" && method === "GET") {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
             message: "URL base" 
        }))
    } else if (url === "/api") {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: dataApi }))
    } else if (url === "/public") {
        const data = await fs.promises.readFile("./index.html", "utf-8")
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
    }
     else {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({
            message: "No existe la direccion" 
       }))
    }

    console.log("Metodo:", method)
    console.log("Url:", url)

})

//como le damos vida a esa URL?
//Asignando puerto en backend -> 8000 hasta 9000
server.listen(8080, () => console.log("Server Running"))
