export function mean(numbers: number[]): number {
  
  
  if (numbers.length === 0) {
    throw new Error("Die leer");

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
    throw new Error("Die Liste ist leer");
  }

  const sortedNumbers = [...numbers].sort((a, b) => a - b);
  const length = sortedNumbers.length;


  if (length % 2 !== 0) {
    return sortedNumbers[Math.floor(length / 2)];
  }
  else{

    const mid1 = sortedNumbers[length / 2 - 1];
    const mid2 = sortedNumbers[length / 2];
    return (mid1 + mid2) / 2;
  }

}

