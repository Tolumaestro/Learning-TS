let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Tolu";
// userName = userInput; won't work

if (typeof userInput === "string") {
  userName = userInput;
}
