const pokemonName = document.querySelector(".pokemon__name");
const pokemonNumber = document.querySelector(".pokemon__number");
const pokemonImg = document.querySelector(".pokemon__image");
const btnnext = document.querySelector(".btn-next");
const btnprev = document.querySelector (".btn-prev");
const btnshiny = document.querySelector(".btn-shiny");
const user = document.querySelector (".input__search");
const form = document.querySelector(".form");
let cont = 1

async function fetchpokemon(pokemon) {
    const APIresponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (APIresponse.status == 200) {
        const data = await APIresponse.json();
        return data;
    }
}

form.addEventListener ("submit" , (event) => {
    event.preventDefault();
    renderpokemon(user.value.toLowerCase());
 })

 btnnext.addEventListener("click" , () => {
    cont++
    renderpokemon(cont)
 })

 btnprev.addEventListener("click" , () => {
    cont--
    renderpokemon(cont)
 })

 

const renderpokemon = async (pokemon) => {
    pokemonName.innerHTML = "Loading..."
    pokemonNumber.innerHTML = null
    const data = await fetchpokemon(pokemon);
    if (data) {
    cont = data['id']
    pokemonName.innerHTML = data['name'];
    pokemonNumber.innerHTML = data['id'];
    pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    btnshiny.addEventListener ("click" , () => {
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_shiny'];
     })
    }
    else {
      pokemonName.innerHTML = "Not found :("
      pokemonImg.src = "#"
      pokemonNumber.innerHTML = null
    }
}

renderpokemon(cont)

























