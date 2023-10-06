let dc=['Clark','Bruce','Diana','Barry','Arthur'];
console.log('largo',dc.length);

let primero=dc[(dc.length/2-dc.length/2)];
let ultimo=dc[dc.length-1];
console.log(primero,ultimo);

dc.forEach((elemento,indice,arr)=>{
    console.log(elemento,indice,arr);
});

dc.push('Rafael Wayne');
console.log(dc);

dc.unshift('Paula Wayne');
console.log(dc);

let erasedc = dc.pop();
console.log(erasedc,dc);

let pos = 1
let erasepos = dc.splice(pos,1);
console.log({erasepos,dc});


let posInex=dc.indexOf('Diana');
console.log(posInex,'Diana');
