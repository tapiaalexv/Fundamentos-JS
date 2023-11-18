//MAP -> crea un nuevo array
const obtenerPokemones = async () => {
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        //console.log(data.results)
        const arrayNombres = data.results.map(pokemon => pokemon.name)
        console.log(arrayNombres)
    }catch (error){
        console.log(error)
    }
}
obtenerPokemones()