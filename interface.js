"use strict";
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
