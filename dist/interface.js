"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Users = {
    name: "",
    age: 1,
    id: 32,
    email: "dfd@gmail.com"
};
class EmployeeUser {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
let emps = new EmployeeUser(22, "Name User", { street: "ABC", city: "Bangalore", state: "Karnataka", pin: "3342" });
console.log(emps);
let user = { name: "John", id: 31, email: "alu@gmail.com" };
//#region object-destructioning
let { name: UserName, email: UserLogin } = { name: "John", id: 21, email: "aluvorta@gmail.com" };
console.log("object destructioning: " + UserName);
console.log("object destructioning: " + UserLogin);
let extendedEmployee = { name: "John", id: 21, email: "kalke@gmail.com", salary: 32000 };
console.log(extendedEmployee);
let [user1, user2, ...restUsers] = [
    {
        name: "John",
        email: "john@gmail.com",
        id: 50
    },
    {
        name: "John2",
        email: "john2@gmail.com",
        id: 51
    },
    {
        name: "John3",
        email: "john3@gmail.com",
        id: 52
    }
];
console.log(user1);
console.log(user2);
console.log("------------------------");
console.log(restUsers);
console.log("------------------------");
let result = restUsers.filter(user => user.id > 50);
console.log(result);
// @Component({})
// class Component {
//     constructor(public name: string){}
// }
//# sourceMappingURL=interface.js.map