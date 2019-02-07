import { StringCalculator } from "./index";
describe("StringCalculator", function() {
  describe("Add", function() {
      test('return 0 for empty string', function() {
        expect(StringCalculator.add('')).toBe(0);
      });
  });
});
