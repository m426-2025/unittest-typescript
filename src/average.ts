export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("The numbers can't be zero.");
  }
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number{
  if (numbers.length === 0){
    throw new Error("The numbers can't be zero.");
  }
  numbers.sort((a, b) => a - b);
  const middle: number = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0){
    return mean([numbers[middle - 1], numbers[middle]]);
  }
  return numbers[middle];
}

export function modus(numbers: number[]): number{
  if (numbers.length === 0){
    throw new Error("The numbers can't be zero.");
  }
  const counts: Map<number, number> = new Map<number, number>();
  for (let number of numbers){
    if (counts.has(number)){
      counts.set(number, counts.get(number) + 1);
    } else {
      counts.set(number, 1);
    }
  }
  let maxCount: number = 0;
  let modus: number = 0;
  for (let [number, count] of counts){
    if (count > maxCount){
      maxCount = count;
      modus = number;
    }
  }
  return modus;
}

export function standardDeviation(numbers: number[]): number{
  if (numbers.length === 0){
    throw new Error("The numbers can't be zero.");
  }
  const meanValue: number = mean(numbers);
  let sum: number = 0;
  for (let number of numbers){
    sum += Math.pow(number - meanValue, 2);
  }
  const variance: number = sum / numbers.length;
  return Math.sqrt(variance);
}