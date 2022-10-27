const getPokemon = async () => {
    let randId = Math.floor(Math.random() * 905 + 1)
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randId}`)
    imageurl = response.data.sprites.other['official-artwork'].front_default
    holder = document.getElementById('random_pokemon')
    holder.src = imageurl

    pokeName = response.data.species.name 
    textHolder = document.getElementById('label')
    textHolder.innerHTML = pokeName

    pokeType = response.data.types[0].type.name

    return populateFivePokemon(pokeType)
}



const populateFivePokemon = async (pokeType) => {
    const reply = await axios.get(`https://pokeapi.co/api/v2/type/${pokeType}`)
    pokeList = reply.data.pokemon
    randomParameters = pokeList.length
    let pokeArray = []
    i = 0
    while (i < 5){
        let randPokemonId = Math.floor(Math.random()* randomParameters)
        let pokeName = reply.data.pokemon[randPokemonId].pokemon.name
        // console.log(randPokemonId)
        console.log(pokeName)
        pokeArray.push(pokeName)
        i++;
    }
    fivePokePictures(pokeArray)
}

const fivePokePictures = async (list) => {
    i = 0
    while (i < 5){
    const reply = await axios.get(`https://pokeapi.co/api/v2/pokemon/${list[i]}`)
    pokeImage = reply.data.sprites.other['official-artwork'].front_default
    stringI = i.toString()
    holder = document.getElementById(stringI)
        i++;
    holder.src = pokeImage
    }}
