function apiFetchPromise(){
    const data = fetch("https://swapi.dev/api/films/")
                    .then((res) => console.log("res:", res))
                    .catch((err) => console.log(err))
    return data
}   

async function apiFetchAsyncAwait(){
    const data = await fetch("https://swapi.dev/api/films/")
    return data
}

//module
module.exports = {
    apiFetchPromise,
    apiFetchAsyncAwait
}