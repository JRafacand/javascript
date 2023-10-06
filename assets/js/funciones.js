function saludar(){
    alert("Hola Mundo");
}

const saludar7 = function(nombre){
    console.log(arguments);
}
const saludar2 = () => {
console.log("Hola Mundo 2");
}

let saludar3 = () => console.log("Hola Mundo 3");

let saludar4 = function(){
prompt("Hola Mundo 4");
}

const saludar5 = (nombre) => {
console.log("Hola "+nombre);
}


/* const saludar6 = (...nombres) => {
    console.log(`Hola ${nombres.join(", ")}`);
} */

function saludar6(){
    console.log(arguments);
}

saludar6('Rafael',30,40);
saludar7('Rafael',30,50,'SIETE');
saludar();
saludar2(); 
saludar3();
saludar4();
saludar5("Rafael");