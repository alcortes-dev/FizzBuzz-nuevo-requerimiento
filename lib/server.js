const express = require("express");
const ExplorerController = require("./controllers/ExplorerController.js");

const app = express();
app.use(express.json());
const PORT = 3000;

app.get("/v1/explorers/amount/:mission", (req, res) => {
    let { mission } = req.params;
    let explorers = ExplorerController.getExplorersAmountByMission(mission);
    res.status(200).json({"mission": mission, "quantity": explorers });
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    let { mission } = req.params;
    let explorers = ExplorerController.getExplorersUsernamesByMission(mission);
    res.status(200).json({"mission": mission, "explorers": explorers });
});

app.get("/v1/explorers/:mission", (req, res) => {
    let { mission } = req.params;
    let explorers = ExplorerController.getExplorerByMission(mission);
    res.status(200).json(explorers);
});

app.listen(PORT, () => console.log(`FizzBuzz service escuchando en el puerto ${PORT}`));
