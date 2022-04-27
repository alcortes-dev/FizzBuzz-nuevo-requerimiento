const { ExplorerService } = require("../services/");
const { Reader, miDirectorio } = require("../utils/");
const path = require("path");

class ExplorerController{
  
    static baseDir = miDirectorio();

    static getExplorerByMission(mission){
        let ruta = path.join(ExplorerController.baseDir, "explorers.json");
        const explorers = Reader.readJsonFile(ruta);
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission){
        let ruta = path.join(ExplorerController.baseDir, "explorers.json");
        const explorers = Reader.readJsonFile(ruta);
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmountByMission(mission){
        let ruta = path.join(ExplorerController.baseDir, "explorers.json");
        const explorers = Reader.readJsonFile(ruta);
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

}

module.exports = ExplorerController;

