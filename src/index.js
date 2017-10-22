import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// import registerServiceWorker from './registerServiceWorker';
import HotCold from './components/hot-cold';
import store from './store';
import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// ReactDOM.render(<HotCold />, document.getElementById('root'));

ReactDOM.render(
  <Provider store={store}>
    <HotCold />
  </Provider>,
  document.getElementById('root')
);
console.log('React Version: ', React.version);