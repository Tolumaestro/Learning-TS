function add(n1, n2) {
    var result = n1 + n2;
    return result;
}
function printResult(num) {
    console.log("Result: " + num);
}
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
