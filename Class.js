"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EmployeeWithIncapsulatedParameters_id, _EmployeeWithIncapsulatedParameters_address;
Object.defineProperty(exports, "__esModule", { value: true });
//import * as UserLogin from './interface'
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
class EmployeeWithIncapsulatedParameters {
    constructor(id, name, address) {
        _EmployeeWithIncapsulatedParameters_id.set(this, void 0);
        _EmployeeWithIncapsulatedParameters_address.set(this, void 0);
        __classPrivateFieldSet(this, _EmployeeWithIncapsulatedParameters_id, id, "f");
        this.name = name;
        __classPrivateFieldSet(this, _EmployeeWithIncapsulatedParameters_address, address, "f");
    }
    getNameWithAddress() {
        //return this.name + " " + this.address;
        return `${this.name} stays at ${__classPrivateFieldGet(this, _EmployeeWithIncapsulatedParameters_address, "f")}`;
    }
    static getEmployeeCount() {
        return 50;
    }
    set empId(id) {
        __classPrivateFieldSet(this, _EmployeeWithIncapsulatedParameters_id, id, "f");
    }
    get empId() {
        return __classPrivateFieldGet(this, _EmployeeWithIncapsulatedParameters_id, "f");
    }
}
_EmployeeWithIncapsulatedParameters_id = new WeakMap(), _EmployeeWithIncapsulatedParameters_address = new WeakMap();
class Manager extends EmployeeWithIncapsulatedParameters {
    constructor(id, name, address) {
        super(id, name, address);
        this.name = "not available in instance but available in own class and extended class";
    }
    getNameWithAddress() {
        //return this.name + " " + this.address;
        return `${this.name} is my name`;
    }
}
let mike = new Manager(2, "mike", "cherise Drive");
let mikeAddress = mike.getNameWithAddress();
console.log(mikeAddress);
let john = new Employee();
john.id = 1;
john.name = 'John';
john.address = 'Highway 71';
console.log(john);
let johnPlayer = new EmployeeWithParameterizedConstructor(1, "JohnPlayer", "Hignway 71");
console.log(johnPlayer);
let address = johnPlayer.getNameWithAddress();
console.log(address);
console.log(EmployeeWithIncapsulatedParameters.getEmployeeCount());
let johnGetterSetter = new EmployeeWithIncapsulatedParameters(4, "Encapsulated Piyarre", "3 Melborne, Chakolbar street, Australia");
johnGetterSetter.empId = 34;
console.log(johnGetterSetter.empId + " : " + johnGetterSetter.getNameWithAddress());
class EmployeewithLogin {
    Login() {
        return { name: "John", id: 31, email: "alu@gmail.com" };
    }
}
let loginInstance = new EmployeewithLogin();
console.log(loginInstance.Login());
