export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(first: number, second: number): number {
  return first * second;
}

export function division(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Division durch 0 ist nicht erlaubt!");
  }
  return a / b;
}
