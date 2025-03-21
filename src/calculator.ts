export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(faktor1: number, faktor2: number): number {
  return faktor1 * faktor2;
}

export function divide(dividend: number, divisor: number,): number {
  if (divisor == 0) {
    throw new Error("divided by zero");
  }

  return dividend / divisor;
}