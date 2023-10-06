let batfamily = {
    batman: 'Bruce Wayne',
    robin: 'Dick Grayson',
    batwoman: 'Barbara Gordon',
    vivo: false,
    numcord: {
        long: 33.33,
        latitud: -45.33
    },
    trajes: ['Nightmare','ArmorClark','HellBat']
};
console.log('leader', batfamily.batman);
console.log('coordenadas', batfamily.numcord.latitud);
console.log('coordenadas', batfamily.trajes[2]);

delete batfamily.vivo
console.log(batfamily)

const entriesPares = Object.entries(batfamily)//creat object with pares
console.log(batfamily)

batfamily.wife = 'Catwoman';
console.log(batfamily);

Object.freeze(batfamily);//conjela mi objeto

const propiedades = Object.getOwnPropertyNames(batfamily);
const valores = Object.getOwnPropertyNames(batfamily);
console.log({propiedades,valores});