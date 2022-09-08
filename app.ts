function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    return phrase + result;
  } else {
    return null;
  }
}

const num1 = 5;
const num2 = 2.8;
const printResult = false;
const resultPhrase = "Result is: ";

const result = add(num1, num2, printResult, resultPhrase);

console.log(result);
