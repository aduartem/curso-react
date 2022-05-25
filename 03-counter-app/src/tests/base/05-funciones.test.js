import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas en 05-funciones', () => {
  test('getUser debería retornar un objeto', () => {
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    };

    const user = getUser();

    expect(user).toEqual(userTest);
  })

  // getUsuarioActivo debe de retornar un objeto
  test('getUsuarioActivo debería retorna un objeto', () => {
    const name = 'Andres';
    const userTest = {
      uid: 'ABC567',
      username: name
    };

    const user = getUsuarioActivo(name);
    expect(user).toEqual(userTest);
  });
})