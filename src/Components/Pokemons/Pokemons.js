import React, { Component } from "react";
import axios from "axios";
import Pokemon from "./Pokemon/Pokemon";
import Button from "../Button";
import Input from "../Input";

class Poke extends Component {
  constructor(props) {
    super(props);

    this.state = {
      update: false,
      poke: [],
      newPokemon: "",
      filter: ""
    };
  }

  componentWillMount() {
    axios.get("/api/getPokemons").then(response => {
      this.setState({ poke: response.data });
      console.log(response);
    });
  }
  updatePokemonHandler = (id, name) => {
    // console.log(name, id);
    axios.put(`/api/updatePokemons/${id}`, { name }).then(response => {
      console.log(response);
      this.setState({ poke: response.data });
    });
  };

  deletePokemonHandler = id => {
    axios.delete(`/api/deletePokemons/${id}`).then(response => {
      this.setState({ Poke: response.data });
    });
  };

  onSubmitHandler = e => {
    axios
      .post("/api/postPokemons", { name: this.state.newPokemon })
      .then(response => {
        this.setState({ pokemon: response.data, newPokemon: "" });
      });
  };
  onChangeHandler = e => {
    this.setState({ newPokemon: e.target.value });
  };

  onEditHandler = () => {
    this.setState({ editing: !this.state.editing });
  };

  render() {
    const { pokemon, editing } = this.state;
    let pokemonList = this.state.poke.map((elem, ind) => {
      return (
        <div key={elem.id} className="pokeCard">
          <h2>Name: {elem.name}</h2>
          <Pokemon
            updatePokemon={this.updatePokemonHandler}
            deletePokemon={this.deletePokemonHandler}
            name={elem.name}
            id={elem.id}
          />
        </div>
      );
    });
    return (
      <div>
        <h1>Pokemon</h1>
        <form onSubmit={this.onSubmitHandler}>
          <Input
            value={this.state.newPokemon}
            onChange={this.onChangeHandler}
            type="text"
            placeholder="ADD POKEMON WHATTT!!!"
          />
          <Button>POST</Button>
        </form>

        <div className="pokemonMain">{pokemonList}</div>
      </div>
    );
  }
}

export default Poke;
