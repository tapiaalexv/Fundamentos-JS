//FILTER -> crea un nuevo array con todos los elementos que cumplan una condicion

const obtenerPokemones = async () => {
    try{
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        //console.log(data.results)
        //const arrayNombres = data.results.filter(pokemon => pokemon.name === 'bulbasaur')
        const arrayNombres = data.results.filter(pokemon => pokemon.name !== 'bulbasaur')
        console.log(arrayNombres)
    }catch (error){
        console.log(error)
    }
}
obtenerPokemones()