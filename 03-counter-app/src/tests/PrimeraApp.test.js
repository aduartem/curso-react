import React from 'react';
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en <PrimeraApp />', () => {
  test('debe mostrar <PrimeraApp /> correctamente', () => {
    const saludo = 'Hola, Soy Goku';
    const wrapper = shallow(<PrimeraApp saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el subtitulo enviado por props', () => {
    const saludo = 'Hola, Soy Goku';
    const subtitulo = 'Soy un subtitulo';
    const wrapper = shallow(
      <PrimeraApp 
        saludo={saludo}
        subtitulo={subtitulo}
      />
    );

    const textoParrafo = wrapper.find('p').text()
    // console.log('textoParrafo: ', textoParrafo);
    expect(textoParrafo).toBe(subtitulo);
  });
});