//API fetch

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())//funcion flecha acortada
    .then(data => {
        //console.log(data.results)
        data.results.forEach(elemento =>{ //se utilizo forEach para recorrer el array
            console.log(elemento)
        });
    })
    .catch(error => console.log(error)) //sirve para atrapar el error