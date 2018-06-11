import React, { Component } from "react";
import Button from "../../Button";
import Input from "../../Input";

class Pokemon extends Component {
  state = {
    newPokemon: ""
  };

  onChangeHandler = e => {
    this.setState({ newPokemon: e.target.value });
  };
  render() {
    // const { deletePokemon, updatePokemon } = this.props;
    // console.log(this.props);
    const { name, id } = this.props;
    // console.log(name, id);

    return (
      <div className="Pokemon">
        <div>
          <div>
            <Input
              value={this.state.newPokemon}
              onChange={this.onChangeHandler}
              type="text"
            />
            <Button
              clicked={() =>
                this.props.updatePokemon(id, this.state.newPokemon)
              }
            >
              Update
            </Button>
          </div>
        </div>
        <Button clicked={() => this.props.deletePokemon(id)}>Delete</Button>
      </div>
    );
  }
}
export default Pokemon;
