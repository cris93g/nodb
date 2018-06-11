const axios = require("axios");

let pokemons = [];
let id = 0;

axios.get("https://www.pokeapi.co/api/v1/pokedex/1/").then(response => {
  const arr = response.data.pokemon;

  let objectsWithIds = arr.map(obj => {
    obj.id = id;
    id++;

    return obj;
  });
  pokemons = objectsWithIds;
});
//get pokemon
let getPokemons = (req, res, next) => {
  res.status(200).send(pokemons);
};

//delete pokemon
let deletePokemons = (req, res, next) => {
  const { id } = req.query;
  let indexOfPokemons = pokemons.findIndex(pokemon => pokemons.id == id);
  pokemons.splice(indexOfPokemons, 1);
  res.status(200).send(pokemons);
};

//create new pokemon
const postPokemons = (req, res, next) => {
  const { name } = req.body;
  let newPokemon = {
    name,
    id
  };
  pokemons.push(newPokemon);
  res.status(200).send(pokemons);
};
//update
const updatePokemons = (req, res, next) => {
  console.log(req.body);
  pokemons.forEach(
    pokemon =>
      pokemon.id == req.params.id ? Object.assign(pokemon, req.body) : null
  );
  // console.log()
  // if (pokemon.id == req.params.id) {
  //   Object.assign(pokemon, req.body);
  // } else {
  //   return null;
  // }

  res.status(200).send(pokemons);
};

module.exports = {
  updatePokemons,
  getPokemons,
  deletePokemons,
  postPokemons
};
