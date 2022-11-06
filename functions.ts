
//#region nameFunction-start

function addition(a:number,b:number){
    a+b;
};
// without returnType possibility not to return value from functions

function addition2(a:number,b:number): number{
    return a+b;
};

console.log(addition2(2,3));
 //#endregion nameFunction-end


 //#region arrow-function

const sub = ( num1 : number, num2 : number ) : number => num1 - num2;
console.log(sub(2,3));

//#endregion arrow-function



//#region function-expression
const mult = function(num1:number,num2:number) : number {
    return  num1 * num2;
};
//#endregion function-expression



//#region  optional-parameters
function addition98(a:number,b:number,c?:number){
    return c ? a+b+c : a+b;
};
addition98(2,3,4);
addition98(1,4);
//#endregion optional-parameters


//#region required-parameters
const substy = ( num1 : number, num2 : number, num3=10 ) : number => num1 - num2 -num3;
console.log(substy(2,3));
console.log(substy(2,3,5));



//#endregion required-paramters


//#region rest-parameters
function addTwo(num1: number,num2: number, ...num3: number[]) : number{
    return num1 + num2 +num3.reduce((a,b)=>a+b,0);
}
console.log(addTwo(2,3));

let numberss =[5,6,7];
console.log(addTwo(2,3,...numberss));
console.log(addTwo(2,3,...[1,2,3,4]));
console.log(addTwo(2,3,4,5,6,7,8,9,0));


//#endregion rest-parameters
