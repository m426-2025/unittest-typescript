export function mean(numbers: number[]): number {
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function meanOfFive(numbers: number[]): number {
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function meanOfNoNr(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("No numbers provided");
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

export function medianOfNr(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("No numbers provided");
  }
  numbers.sort((a, b) => a - b);
  if (numbers.length % 2 === 0) {
    const mid = numbers.length / 2;
    return (numbers[mid - 1] + numbers[mid]) / 2;
  } else {
    const mid = Math.floor(numbers.length / 2);
    return numbers[mid];
  }
}