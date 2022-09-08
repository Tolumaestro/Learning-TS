enum Role {
  admin,
  user,
  owner,
}

const person = {
  name: "Tolulope",
  age: 21,
  hobbies: ["running", "cooking"],
  role: Role.user,
};

let favActivities: string[];
favActivities = ["sports", "tv"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.user) {
  console.log("is user");
}
