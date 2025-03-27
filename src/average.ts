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

export function mode(numbers: number[]): number[] {
  const counts = {};

  for (const num of numbers) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  return Object.keys(counts)
      .map(Number)
      .sort((a, b) => counts[b] - counts[a])
      .filter((x, _i, arr) => counts[x] >= counts[arr[0]]);
}

export function standardDeviation(numbers: number[]): number {
  const avg = mean(numbers);
  const n = numbers.length;

  let result = 0;

  for (const x of numbers) {
    result += (x - avg) ** 2;
  }

  return Math.sqrt(result / n);
}