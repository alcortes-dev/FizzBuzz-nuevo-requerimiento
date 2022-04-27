const ExplorerService = require("../../../lib/services/ExplorerService.js");

const explorers = [
    {mission: "node", githubUsername: "ajolonauta1"},
    {mission: "java", githubUsername: "ajolonauta2"},
    {mission: "node", githubUsername: "ajolonauta3"},
    {mission: "java", githubUsername: "ajolonauta4"},
    {mission: "java", githubUsername: "ajolonauta5"},
];

describe("Prueba de métodos static de la clase ExplorerService", () => {
    test("Método filterByMission", () => {
        let resultado = ExplorerService.filterByMission(explorers, "node");
        expect(resultado).toMatchObject([
            {mission: "node", githubUsername: "ajolonauta1"},
            {mission: "node", githubUsername: "ajolonauta3"},
        ]);
    });

    test("Método getAmountOfExplorersByMission", () => {
        let resultado = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        expect(resultado).toBe(3);
    });

    test("Método getExplorersUsernamesByMission", () => {
        let resultado = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(resultado).toMatchObject([ "ajolonauta1", "ajolonauta3"]);
    });

});
