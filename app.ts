const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Tolulope",
  age: 21,
  hobbies: ["running", "cooking"],
  role: [2, "author"],
};

let favActivities: string[];
favActivities = ["sports", "tv"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
