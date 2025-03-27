export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiplication (factora: number, factorb: number): number {
  return factora * factorb;
}


export function division(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new Error("Division durch 0 ist nicht erlaubt");
  }
  return dividend / divisor;
}