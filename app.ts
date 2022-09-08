const person = {
  name: "Tolulope",
  age: 21,
  hobbies: ["running", "cooking"],
};

let favActivities: string[];
favActivities = ["sports", "tv"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
