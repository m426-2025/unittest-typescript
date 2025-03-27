export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Leere Liste – kein arithmetisches Mittel berechenbar");
  }

  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum / numbers.length;
}
