function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "as-number") {
        result = +result;
    }
    else if (resultConversion === "as-string") {
        result = result.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedStringAges = combine(30, 26, "as-string");
console.log(combinedStringAges);
var combinedNames = combine("Tolu", "Soetan", "as-string");
console.log(combinedNames);
