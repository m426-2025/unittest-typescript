export function mean(numbers: number[]): number {
  if (numbers.length==0){
    throw new Error("Liste hat keine Elemente")
  }
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number {
  let numberOfElements: number = numbers.length
  let halfOfElements: number = Math.floor(numberOfElements/2)
  if (numberOfElements==0){
    throw new Error("Liste hat keine Elemente")
  }
  numbers.sort((n1,n2) => n1 - n2);
  if (numberOfElements % 2 == 0){
    return (numbers[halfOfElements] + numbers[halfOfElements - 1]) / 2
  }
  else{
    return numbers[halfOfElements]
  }
  
}
