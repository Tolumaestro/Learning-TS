function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        return phrase + result;
    }
    else {
        return null;
    }
}
var num1 = 5;
var num2 = 2.8;
var printResult = false;
var resultPhrase = "Result is: ";
var result = add(num1, num2, printResult, resultPhrase);
console.log(result);
