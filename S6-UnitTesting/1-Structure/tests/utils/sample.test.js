const {add} = require("../../src/utils/sample");

// Test Suite
describe("Test addition of 2 numbers", () => {
    test("Should add 2 positive numbers", () => {
        const result = add(4,6);
        // Assertion
        expect(result).toBe(10);
    });

    test("Should add 2 negative numbers", () => {
        const result = add(-4,-6);
        // Assertion
        expect(result).toBe(-10);
    });


    test("Should have 2 parameters", () => {
        const result = add(5);
        // Assertion
        expect(result).toBe(null);
    });


    test("Should accept only numbers", () => {
        const result = add(1, "Chakra");
        // Assertion
        expect(result).toBe(null);
    });

})
