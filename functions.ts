
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



function getItems3<T>(items: T[]): T[]{
    return new Array<T>().concat(items);
}
function getItems<Type>(items: Type[]): Type[]{
    return new Array<Type>().concat(items);
}
let concatResult = getItems([1,2,3,4,5]);
let concatResult2 = getItems<number>([1,2,3,4,5]);
let concatString = getItems(["a","b","c","d"]);
let concatString2 = getItems<string>(["a","b","c","d"]);
//#endregion generics-end