var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["user"] = 1] = "user";
    Role[Role["owner"] = 2] = "owner";
})(Role || (Role = {}));
var person = {
    name: "Tolulope",
    age: 21,
    hobbies: ["running", "cooking"],
    role: Role.user
};
var favActivities;
favActivities = ["sports", "tv"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
if (person.role === Role.user) {
    console.log("is user");
}
