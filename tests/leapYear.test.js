const {expect} = require("@jest/globals");
const leapYear = require("../index")

describe("Tests que validan si un año es bisiesto o no", () => {

    test("Test que devuelve False si el año no es divisible por 4", () => {
        expect(leapYear(1997)).toBe(false);
    });

    test("Test que devuelve True si el año es divisible por 4", () =>{
        expect(leapYear(1996)).toBe(true);
    });

    test("Test que devuelve True si el año es divisible por 400", () =>{
        expect(leapYear(1600)).toBe(true);
    });

    test("Test que devuelve False si el año es divisible por 100 pero no por 400", () => {
        expect(leapYear(1800)).toBe(false);
    });

})