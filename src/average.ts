export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of zero numbers");
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
    throw new Error("Cannot calculate median of zero numbers");
  }

  const sorted: number[] = numbers.slice().sort();
  const middle: number = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return mean([sorted[middle - 1], sorted[middle]]);
  } else {
    return sorted[middle];
  }
}

export function modus(numbers: number[]): number[] {
  if (numbers.length === 0) return [];

  const frequency: Record<number, number> = {};
  let maxFreq = 0;

  for (const num of numbers) {
    frequency[num] = (frequency[num] || 0) + 1;
    maxFreq = Math.max(maxFreq, frequency[num]);
  }

  return Object.keys(frequency)
    .map(Number)
    .filter(num => frequency[num] === maxFreq);
}

export function stdDev(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate standard deviation of zero numbers");
  }

  if (numbers.length === 1) {
    return 0;
  }

  const meanValue = mean(numbers);
  const squaredDifferences = numbers.map(num => Math.pow(num - meanValue, 2));
  const variance = squaredDifferences.reduce((sum, diff) => sum + diff, 0) / numbers.length;
  return Math.sqrt(variance);
}