export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of empty list");
  }
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}