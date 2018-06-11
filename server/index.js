const express = require("express");
const { json } = require("body-parser");
// const axios = "axios";
const poke = require("./controllers/pokemonControls");

const app = express();
app.use(json());

// router.get("/ilike/:icecreamchoice", function(req, res) {
//   let pick = req.params.icecreamchoice;
//   let responseObject = { message: "i Like" + pick + "too" };
//   res.send(responseObject);
// });

// app.get("/api/test", (req, res) => {
//   res.status(200).send({ message: "opps!" });
// });
//get pokemon
app.get("/api/getPokemons", poke.getPokemons);
// app.get("/api/getPokemons", (req, res) => {
//   console.log(req.query);
// });

// app.get("/api/getPokemons/:tagId", function(req, res) {
//   res.send("tagId is set to " + req.params.tagId);
// });

app.delete("/api/deletePokemons/:id", poke.deletePokemons);
app.post("/api/postPokemons", poke.postPokemons);
app.put("/api/updatePokemons/:id", poke.updatePokemons);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
