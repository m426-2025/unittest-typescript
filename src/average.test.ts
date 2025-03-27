import { mean } from "./average";

test("test mean of two numbers", () => {
  const numbers: number[] = [2, 6]; // geändert von [1, 4]
  const expected: number = 4;       // angepasst auf neuen Mittelwert
  const actual: number = mean(numbers);
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;
  const actual: number = mean(numbers);
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  expect(() => mean([])).toThrow("Leere Liste – kein arithmetisches Mittel berechenbar");
});
