import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Priuebas en funciones de Héroes', () => {
  test('debe de retornar un héroe por id', () => {
    const id = 2;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find(h => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test('debe de retornar un undefined si Héroe no existe', () => {
    const id = 10;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test('debe de retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC';
    const heroesDC = getHeroesByOwner(owner);
    const heroesData = heroes.filter( h => h.owner === owner);
    expect(heroesDC).toEqual(heroesData);
  });

  test('debe de retornar un arreglo con los héroes de Marvel', () => {
    const owner = 'Marvel';
    const heroesMarvel = getHeroesByOwner(owner);
    // const heroesData = heroes.filter( h => h.owner === owner);
    // expect(heroesMarvel.length).toEqual(heroesData.length);
    expect(heroesMarvel.length).toEqual(2);
  })
});