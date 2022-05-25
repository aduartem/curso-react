const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 445555534,
    lat: 14.32223,
    lng: 34.939392,
  }
};

// console.log({ persona });
// console.table({ persona });

const persona2 = { ...persona };

persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);