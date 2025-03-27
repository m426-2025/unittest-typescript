export function standardDeviation(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('Cannot calculate standard deviation of an empty array');
  }

  const mean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

  const squaredDifferences = numbers.map((num) => Math.pow(num - mean, 2));

  const averageSquaredDifference = squaredDifferences.reduce((sum, diff) => sum + diff, 0) / numbers.length;

  return Math.sqrt(averageSquaredDifference);
}
