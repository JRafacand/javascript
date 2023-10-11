/* function crearPersona (nombre, apellido){
    return {nombre:nombre, apellido:apellido}
} 

function crearPersona (nombre, apellido){
    return {nombre, apellido}
} 

const crearPersona = (nombre, apellido)=>{
    return {nombre, apellido}
} 

const crearPersona = (nombre, apellido)=>({nombre, apellido})
 

const persona= crearPersona("Rafael","Candilejo");
console.log('persona',persona);


function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos = (edad, ...args)=>{console.log(edad,args);};
imprimeArgumentos(10,true,false,"Rafael", "Hola");*/

const imprimeArgumentos2 = (edad, ...args)=>{
    return args;
};

//const argumentos = imprimeArgumentos2(10,true,false,"Rafael", "Hola");

const [casado,vivo,nombre,saludo] = imprimeArgumentos2(10,true,false,"Rafael", "Hola");
console.log({casado,vivo,nombre,saludo});