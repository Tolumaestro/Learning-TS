type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionType
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  if (resultConversion === "as-number") {
    result = +result;
  } else if (resultConversion === "as-string") {
    result = result.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine(30, 26, "as-string");
console.log(combinedStringAges);

const combinedNames = combine("Tolu", "Soetan", "as-string");
console.log(combinedNames);
