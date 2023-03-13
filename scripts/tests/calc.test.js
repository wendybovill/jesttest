

const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22" , () => {
            expect(addition(20,22)).toBe(42);
            })
        test("should return 73 for 42 + 31" , () => {
            expect(addition(42,31)).toBe(73);
            })
        test("should return 0 if no number entered or a string entered" , () => {
            expect(addition(0,0)).toBe(0);
            })
            
    });

});