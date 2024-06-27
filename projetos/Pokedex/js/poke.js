// CONECTAR COM POKEAPI

const pokemonName = document.querySelector(".pokemon__name");

const pokemonNumber = document.querySelector(".pokemon__number");


const pokemonImage = document.querySelector(".pokemon__image");

const form = document.querySelector(".form");


const input = document.querySelector(".input__search");


const buttonPrev = document.querySelector(".btn-prev");


const buttonNext = document.querySelector(".btn-next");

let contadora = 1;





const fecthPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status === 200) {
        const data = await APIResponse.json(); return data;

    }

};

// RENDERIZAR OS DADOS DA API

const renderpokemon = async (pokemon) => {

    pokemonName.textContent = "carregando..."
    pokemonNumber.textContent = "carregando..."
    pokemonImage.src = "https://media1.tenor.com/m/U_b751rm40EAAAAC/agora-%C3%A9-s%C3%B3-esperar-agora-e-so-esperar.gif"

    const data = await fecthPokemon(pokemon);

    if (data) {
        pokemonNumber.innerHTML = data.id;
        pokemonName.innerHTML = data.name;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];

        input.value = "";


        console.log(data);

        contadora = data.id

    } else {
        pokemonName.textContent = "Não Encontrado!"

        pokemonNumber.textContent = ""

    }



};


form.addEventListener("submit", (event) => {
    event.preventDefault();

    renderpokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener("click", () => {

    if (contadora > 1) {
    
        contadora -= 1;
renderpokemon(contadora)
    }
});

buttonNext.addEventListener("click", () => {

contadora += 1;
renderpokemon(contadora)
});

renderpokemon(1)

