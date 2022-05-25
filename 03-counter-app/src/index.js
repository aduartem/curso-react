// En React 18
// import { createRoot } from 'react-dom/client';
// import CounterApp from './CounterApp';

// import './index.css';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<CounterApp value={10} />);

// En React <18
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';

import './index.css';

const divRoot = document.querySelector('#root');
ReactDOM.render(<CounterApp value={10} />, divRoot);
