export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("empty array");
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
    throw new Error("empty array");
  }
  numbers.sort((a, b) => a - b);
  const middle: number = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    return mean([numbers[middle - 1], numbers[middle]]);
  } else {
    return numbers[middle];
  }
}

export function mode(numbers: number[]): any[] {
  if (numbers.length === 0) {
    throw new Error("empty array");
  }
  var numbersCount: [number, number][] = [];
  numbers.forEach(number => {
    var count = 0;
    numbers.forEach((num) => { if(num === number) count++ });
    numbersCount.push([number, count]);
  });

  numbersCount = Array.from(
    new Map(numbersCount.map((nc) => [nc[0], nc])).values()
  );

  numbersCount.sort((a, b) => b[1] - a[1]);
  numbersCount = numbersCount.filter((numberCount) => numberCount[1] === numbersCount[0][1]);
  var result: number[] = [];
  numbersCount.forEach(numberCount => {
    result.push(numberCount[0]);
  });
  result.sort((a, b) => a - b);
  return result;
}