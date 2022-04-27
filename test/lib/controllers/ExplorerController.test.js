const ExplorerController  = require("../../../lib/controllers/ExplorerController.js");

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

    test("Prueba del método getValidationInNumber", () =>{
        const resultado1 = ExplorerController.getValidationInNumber(4);
        const resultado2 = ExplorerController.getValidationInNumber(6);
        const resultado3 = ExplorerController.getValidationInNumber(25);
        const resultado4 = ExplorerController.getValidationInNumber(45);
        expect(resultado1).toBe(4);
        expect(resultado2).toBe("FIZZ");
        expect(resultado3).toBe("BUZZ");
        expect(resultado4).toBe("FIZZBUZZ");
    });


});
