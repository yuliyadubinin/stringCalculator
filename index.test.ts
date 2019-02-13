import { StringCalculator } from "./index";
describe("StringCalculator", () => {
  describe("Add", function() {
    test("Should return 0 for empty string", function() {
      expect(StringCalculator.add("")).toBe(0);
    });

    /*test("Should not allow negative numbers", function() {
      expect(() => StringCalculator.add("-5, -3")).toThrowError(
        "No negative values are allowed: -5, -3"
      );
    });*/

    test("Should return the number itself", function() {
      expect(StringCalculator.add("7")).toBe(7);
    });

    test("Should return the sum of two numbers", function() {
      expect(StringCalculator.add("7, 3")).toBe(10);
    });

    test("Should return the sum of an unknown amount of numbers", function() {
      expect(StringCalculator.add("10,10,30,1,5")).toBe(56);
    });

    test("Numbers bigger than 1000 should be ignored", function() {
      expect(StringCalculator.add("10000, 3")).toBe(3);
    });

    test("Should allow \n in between the input number string", function() {
      expect(StringCalculator.add("7\n7")).toBe(14);
    });

    test("Should allow \n in between the input number string", function() {
      expect(StringCalculator.add("7\n7,3")).toBe(17);
    });

    test("Should allow \n in between the input number string", function() {
      expect(StringCalculator.add("7\n7,3,5")).toBe(22);
    });

    test("Should allow \n or , in between the input number string", function() {
      expect(StringCalculator.add("1\n23,1,5")).toBe(30);
    });

    test("Explicit separator", function() {
      expect(StringCalculator.add("//;\n1;9")).toBe(10);
    });

    test("Should allow two delimiters in between the input number string", function() {
      expect(StringCalculator.add("//[??]15??20")).toBe(35);
    });

    test("Should allow two delimiters in between the input number string", function() {
      expect(StringCalculator.add("//[**]10**100")).toBe(110);
    });
  });
});
