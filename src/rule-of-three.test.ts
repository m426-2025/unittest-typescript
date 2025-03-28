import { RuleOfThree } from "./rule-of-three";

// 1. Standardfall
test("ten for two is five for one", () => {
  const rule = new RuleOfThree(10.0, 2.0);
  expect(rule.calculateFor(1)).toBe(5.0);
});

// 2. Kommazahl mit toBeCloseTo
test("3.5 for 12 items is 5.83 for 20 items", () => {
  const rule = new RuleOfThree(3.5, 12);
  expect(rule.calculateFor(20)).toBeCloseTo(5.833, 3);
});

// 3. Null als totalPrice
test("zero total price results in zero output", () => {
  const rule = new RuleOfThree(0.0, 10);
  expect(rule.calculateFor(5)).toBe(0.0);
});

// 4. Null als amount
test("zero amount results in Infinity", () => {
  const rule = new RuleOfThree(10.0, 0);
  expect(rule.calculateFor(5)).toBe(Infinity);
});

// 5. Null als wantedAmount
test("zero wanted amount results in zero output", () => {
  const rule = new RuleOfThree(10.0, 2.0);
  expect(rule.calculateFor(0)).toBe(0.0);
});

// 6. Negative totalPrice
test("negative total price results in negative output", () => {
  const rule = new RuleOfThree(-10.0, 2.0);
  expect(rule.calculateFor(1)).toBe(-5.0);
});

// 7. Negative amount
test("negative amount results in negative unit price", () => {
  const rule = new RuleOfThree(10.0, -2.0);
  expect(rule.calculateFor(1)).toBe(-5.0);
});

// 8. Negative wantedAmount
test("negative wanted amount results in negative output", () => {
  const rule = new RuleOfThree(10.0, 2.0);
  expect(rule.calculateFor(-1)).toBe(-5.0);
});

// 9. Grosse Zahlen
test("large numbers calculation", () => {
  const rule = new RuleOfThree(1_000_000.0, 2.0);
  expect(rule.calculateFor(1)).toBe(500_000.0);
});

// 10. Kleine Zahlen / Dezimalstellen
test("small numbers calculation", () => {
  const rule = new RuleOfThree(0.0002, 0.0001);
  expect(rule.calculateFor(0.00005)).toBe(0.0001);
});

test("ten for two is fifteen for three", () => {
  // Arrange
  const total: number = 10.0;
  const amount: number = 2.0;
  const rule = new RuleOfThree(total, amount);

  // Act
  const actualTotal: number = rule.calculateFor(3);

  // Assert
  expect(actualTotal).toBe(15.0);
});