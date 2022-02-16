let currentPokemon;
let pokemons = [];
let amountPokemons = 15;


//ASYNC FUNCTION LOAD OF POKEDEX
async function loadPokedex() {
    for (let i = 1; i < amountPokemons; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        pokemons.push(currentPokemon);
        console.log('hier sind die Pokomon Informationen:', currentPokemon);

        renderPokemonInfo(currentPokemon);
    }
}


function renderPokemonInfo(pokemons) {          //NEW LOADED POKEMON AS PARAMETER
    let pokemonImg = pokemons['sprites']['other']['home']['front_default'];
    let pokemonName = pokemons['name'];

    let infocontainer = document.getElementById('info-container');

    infocontainer.innerHTML += `
        <div class="column" onclick="openPokemonCard(${currentPokemon.id})">
            <h2><b>${pokemonName}</b></h2>
            <img class="pokemon-img" src="${pokemonImg}">
            <div id="abilities${pokemonName}"></div>
        </div>
    `;
    //CODE VON MIHAI
    for(let i = 0; i < pokemons['abilities'].length; i++){
          document.getElementById(`abilities${pokemonName}`).innerHTML += `<span>${pokemons['abilities'][i]['ability']['name']}</span>`
    }
}


function openPokemonCard(pokemonId) {
    document.getElementById('info-container').style.display = "none";

    openingPokemon = pokemons.find( p => p.id == pokemonId );
    document.getElementById('open-card').style.display = "block";

    let pokemonImg = openingPokemon['sprites']['other']['home']['front_default'];
    let pokemonName = openingPokemon['name'];

    let fullCard = document.getElementById('full-card');

    fullCard.innerHTML = `
        <div class="full-card">
            <h2><b>${pokemonName}</b></h2>
            <img class="pokemon-img" src="${pokemonImg}">
            <div id="abilities${pokemonName}"></div>
        </div>
    `;
}
