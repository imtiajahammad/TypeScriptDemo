"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
}
class EmployeeWithDefaultConstructor {
    constructor() {
        this.id = 1;
        this.name = "john";
        this.address = "Highway on the road 71";
    }
}
class EmployeeWithParameterizedConstructor {
    /*constructor(){
        
    }*/
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress() {
        //return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;
    }
}
let john = new Employee();
john.id = 1;
john.name = 'John';
john.address = 'Highway 71';
console.log(john);
let johnPlayer = new EmployeeWithParameterizedConstructor(1, "JohnPlayer", "Hignway 71");
console.log(johnPlayer);
let address = johnPlayer.getNameWithAddress();
console.log(address);
