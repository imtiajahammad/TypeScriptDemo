import { login } from './interface';
import { User } from './interface';

//import * as UserLogin from './interface'

class Employee {
    id !: number;
    name !: string;
    address !: string;
}


class EmployeeWithDefaultConstructor {
    id : number;
    name : string;
    address : string;

    constructor(){
        this.id=1;
        this.name="john";
        this.address = "Highway on the road 71";
    }
}

class EmployeeWithParameterizedConstructor {
    id : number;
    name : string;
    address : string;

    /*constructor(){
        
    }*/
    constructor(id : number, name: string, address: string)
    {
        this.id = id;
        this.name = name;
        this.address = address;
    }
    getNameWithAddress(): string{
        //return this.name + " " + this.address;
        return `${this.name} stays at ${this.address}`;

    }
}

class EmployeeWithIncapsulatedParameters {
    #id : number;
    protected name : string;
    #address : string;

    constructor(id:number,name:string,address:string){
        this.#id=id;
        this.name=name;
        this.#address=address;
    }

    getNameWithAddress(): string{
        //return this.name + " " + this.address;
        return `${this.name} stays at ${this.#address}`;

    }
    static getEmployeeCount(): number{
        return 50;
    }
    set empId(id:number){
        this.#id=id;
    }
    get empId(){
        return this.#id;
    }

}
class Manager extends EmployeeWithIncapsulatedParameters{
    name = "not available in instance but available in own class and extended class";
    constructor(id: number, name: string, address: string){
        super(id,name,address);
    }

    getNameWithAddress(): string{
        //return this.name + " " + this.address;
        return `${this.name} is my name`;

    }
}
let mike = new Manager(2,"mike", "cherise Drive");
let mikeAddress = mike.getNameWithAddress();
console.log(mikeAddress);

let john = new Employee();
john.id= 1;
john.name = 'John';
john.address = 'Highway 71';

console.log(john);

let johnPlayer = new EmployeeWithParameterizedConstructor(1,"JohnPlayer","Hignway 71");
console.log(johnPlayer);
let address = johnPlayer.getNameWithAddress();
console.log(address);



console.log(EmployeeWithIncapsulatedParameters.getEmployeeCount());


let johnGetterSetter = new EmployeeWithIncapsulatedParameters(4,"Encapsulated Piyarre","3 Melborne, Chakolbar street, Australia");
johnGetterSetter.empId = 34;
console.log(johnGetterSetter.empId + " : " + johnGetterSetter.getNameWithAddress());




class EmployeewithLogin implements login {
    id !: number;
    name !: string;
    address !: string;

    Login(): User {
        return { name: "John", id: 31, email: "alu@gmail.com"};
    }
}

let loginInstance = new EmployeewithLogin();
console.log(loginInstance.Login());








  