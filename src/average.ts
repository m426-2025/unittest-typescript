export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Error Syntax");
  }
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}
