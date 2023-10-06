function sum(a,b){
    return a + b;
}

let a =sum(1,2); // 3

const sum2 = (a,b)=> a+b;
console.log(a,'Valor de a');

console.log(sum(4,8),'Sum');

const getaleatorio=()=> Math.random();
function getaleatorio1(){
    return Math.random();
};

const getaleatorio3=(min,max)=> Math.random();

console.log(sum2(5,19),'Sum Felacha');

console.log(getaleatorio(),'Random Flecha');

console.log(getaleatorio1(),'Random Funcion');

console.log(getaleatorio3(10,11),'Random Flecha 3');