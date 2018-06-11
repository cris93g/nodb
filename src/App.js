import React, { Component } from "react";
import Pokemons from "./Components/Pokemons/Pokemons";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokemons />
      </div>
    );
  }
}

export default App;
