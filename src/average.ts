export function mean(numbers: number[]): number {

  if (numbers.length == 0)
  {
    throw new Error("Liste darf nicht leer sein");
  }
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}


export function median(numbers: number[]): number {

  numbers.sort((a, b) => a - b);
if (numbers.length % 2 == 1)
{
return numbers[numbers.length/2+0.5]; 

}

if (numbers.length % 2 == 0)
  {
    let num1: number = numbers[numbers.length/2+1]
    let num2: number = numbers[numbers.length/2]
  return  (num1 + num2) / 2
  }

}