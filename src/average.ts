export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("no numbers provided");
  }
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("no numbers provided");
  }
  numbers = numbers.toSorted((a, b) => a - b);
  const mid = Math.floor(numbers.length / 2);
  if (numbers.length % 2 !== 0) {
    return numbers[mid];
  } else {
    return (numbers[mid - 1] + numbers[mid]) / 2;
  }
}