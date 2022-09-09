var userInput;
var userName;
userInput = 5;
userInput = "Tolu";
// userName = userInput; won't work
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { errorMessage: message, errorCode: code };
}
generateError("An Error occurred!", 500);
