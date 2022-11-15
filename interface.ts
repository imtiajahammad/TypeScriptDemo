export interface User{
    name: string;
    age?: number;
    id: number;
    email: string;
}

interface Address{
    street: string;
        city: string;
        state: string;
        pin: string;
}

var Users = {
    name: "",
    age: 1,
    id: 32,
    email: "dfd@gmail.com"
}

class EmployeeUser{
    id: number;
    protected name: string;

    address: Address
    constructor(id:number,name:string,address:Address){
        this.id= id;
        this.name=name;
        this.address=address;
    }
}
let emps = new EmployeeUser(22,"Name User",{ street:"ABC", city: "Bangalore",state:"Karnataka",pin:"3342"});
console.log(emps);


let user : User ={ name: "John", id: 31, email: "alu@gmail.com"};


interface ExtendedUser extends User{
    salary: number;
}
let extendedEmployee : ExtendedUser = { name:"John",id:21,email:"kalke@gmail.com",salary:32000};
console.log(extendedEmployee);




export interface login{
    /*whereever you need to use your interface outside its own class, it needs to be added with export keyword, so that it can be imported other places */
    Login(): User;
}
