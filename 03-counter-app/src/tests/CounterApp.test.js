import CounterApp from '../CounterApp';
import { shallow } from 'enzyme'

describe('Pruebas para el componente <CounterApp />', () => {

  let wrapper = shallow(<CounterApp />);
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test('debe mostrar <CounterApp /> correctamente y sus valores por defecto', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar el valor de 100', () => {
    wrapper = shallow(<CounterApp value={100} />);
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('100');
  });

  test('debe incrementar el valor con el botón +1', () => {
    wrapper.find('button').at(0).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('11');
  });

  test('debe incrementar el valor con el botón -1', () => {
    wrapper.find('button').at(2).simulate('click');
    const counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('9');
  });

  test('debe colocar el valor por defecto con el botón Reset', () => {
    let counterText;
    wrapper = shallow(<CounterApp value={105} />);
    counterText = wrapper.find('h2').text().trim();
    // expect(counterText).toBe('105');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(0).simulate('click');
    counterText = wrapper.find('h2').text().trim();
    // expect(counterText).toBe('108');

    wrapper.find('button').at(1).simulate('click');
    counterText = wrapper.find('h2').text().trim();
    expect(counterText).toBe('105');
  });
});