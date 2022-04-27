const FizzBuzz = require("../../../lib/services/FizzbuzzService.js");

const explorer1 = {name: "Explorer1", score: 1};
const explorer2 = {name: "Explorer1", score: 3};
const explorer3 = {name: "Explorer1", score: 5};
const explorer4 = {name: "Explorer1", score: 15};

describe("Pruebas para evaluar la funcionalidad FizzBuzz en Explorer", () => {
    test("Validación para valores 3",() => {
        FizzBuzz.applyValidationInExplorer(explorer2);
        expect(explorer2.trick).toBe("FIZZ");
    });

    test("Validación para valores 5",() => {
        FizzBuzz.applyValidationInExplorer(explorer3);
        expect(explorer3.trick).toBe("BUZZ");
    });

    test("Validación para valores 15",() => {
        FizzBuzz.applyValidationInExplorer(explorer4);
        expect(explorer4.trick).toBe("FIZZBUZZ");
    });

    test("Validación para valores no divisibles por 3 y/o 5",() => {
        FizzBuzz.applyValidationInExplorer(explorer1);
        expect(explorer1.trick).toBe(explorer1.score);
    });


});

describe("Pruebas para evaluar la funcionalidad FizzBuzz en Número", () => {
    test("Validación para valores 3",() => {
        const resultado = FizzBuzz.applyValidationInNumber(3);
        expect(resultado).toBe("FIZZ");
    });

    test("Validación para valores 5",() => {
        const resultado = FizzBuzz.applyValidationInNumber(10);
        expect(resultado).toBe("BUZZ");
    });

    test("Validación para valores 15",() => {
        const resultado = FizzBuzz.applyValidationInNumber(30);
        expect(resultado).toBe("FIZZBUZZ");
    });

    test("Validación para valores no divisibles por 3 y/o 5",() => {
        const resultado = FizzBuzz.applyValidationInNumber(2);
        expect(resultado).toBe(2);
    });


});
