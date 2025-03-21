export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiply(faktorA: number, faktorB: number) {
  return faktorA * faktorB;
}

export function divide(faktorA: number, faktorB: number): number {
  if (faktorB === 0) {
    throw new Error("Divide by zero is not allowed");
  }
  return faktorA / faktorB;
}