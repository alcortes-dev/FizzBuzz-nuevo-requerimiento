const Reader = require("../../../lib/utils/Reader.js");

describe("Prueba de método de lectura de archivo JSON", () => {
    test("Método readJsonFile", () => {
        let resultado = Reader.readJsonFile("./test/lib/utils/prueba.json");
        expect(resultado).toMatchObject([
            {data: "correcto"},
        ]);
    });

});
