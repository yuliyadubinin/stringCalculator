import { StringCalculator } from "./index";
describe("StringCalculator", function() {
  describe("Add", function() {
    test("return 0 for empty string", function() {
      expect(StringCalculator.add('')).toBe(0);
    });

    test("should not allow negative numbers", function() {
      expect(() => StringCalculator.add("-5")).toThrowError(
        'No negative values are allowed: -5'
      );
    });

    test("Should return the number itself when a single number is passed", function() {
      expect(StringCalculator.add("7")).toBe(7);
    });

    test("Should return the sum of the numbers if two are given", function() {
      expect(StringCalculator.add("7, 3")).toBe(10);
    });

    test("Should return the sum of the numbers if two are given", function() {
      expect(StringCalculator.add("7\n7")).toBe(14);
    });

    test("Numbers bigger than 1000 should be ignored", function() {
      expect(StringCalculator.add("10000, 3")).toBe(3);
    });

    
    test("Should allow \n or , in between the input number string", function() {
      expect(StringCalculator.add("1\n23,1")).toBe(25);
    });

    test("Should allow single delimiter in between the input number string", function() {
      expect(StringCalculator.add("//;\n1;9;5")).toBe(15);
    });

    test("Should allow two delimiters in between the input number string", function() {
      expect(StringCalculator.add("//[??]10??10")).toBe(20);
    });

    test.only("Should allow multi delimiter in between the input number string", function() {
      expect(StringCalculator.add("//[***][&&&&]1***3&&&&10")).toBe(14);
    });

    /*test("Should allow any length of delimiter in between the input number string", function() {
      expect(
        StringCalculator.add("//[*][%]\n1*2%3")
      ).toBe(11);
    });*/

    test("Should return the sum of an unknown amount of numbers", function() {
      expect(StringCalculator.add("10,10,30,1,5")).toBe(56);
    });
  });
});
