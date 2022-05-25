import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en el archivo 02-template-string.js', () => {
  test('getSaludo debería retornar: Hola Fernando!', () => {
    const nombre = 'Fernando';
    const saludo = getSaludo(nombre);
    expect(saludo).toBe('Hola ' + nombre + '!');
  })

  // getSaludo debe de retornar Hola Carlos! si no hay argumento nombre
  test('getSaludo debería retornar: Hola Carlos!', () => {
    const saludo = getSaludo();
    expect(saludo).toBe('Hola Carlos!');
  });
});