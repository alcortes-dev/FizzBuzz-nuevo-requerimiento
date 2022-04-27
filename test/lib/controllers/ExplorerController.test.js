const ExplorerController = require("../../../lib/controllers/ExplorerController.js");

describe("Prueba de la clase ExplorerController", () => {

    test("Prueba del método getExplorerByMission", () =>{
        const resultado = ExplorerController.getExplorerByMission("node");
        expect(resultado.length).toBe(10);
        expect(resultado[0].mission).toBe("node");
    });

    test("Prueba del método getExplorersUsernamesByMission", () =>{
        const resultado = ExplorerController.getExplorersUsernamesByMission("node");
        expect(resultado.length).toBe(10);
        expect(resultado).toContain("ajolonauta1");
    });

    test("Prueba del método getExplorersAmountByMission", () =>{
        const resultado1 = ExplorerController.getExplorersAmountByMission("node");
        const resultado2 = ExplorerController.getExplorersAmountByMission("java");
        expect(resultado1).toBe(10);
        expect(resultado2).toBe(5);
    });


});
