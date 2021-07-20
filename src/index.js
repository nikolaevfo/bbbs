import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import './sass/style.scss';
import App from './components/App';
import { rootReducer } from './redux/rootReducer';

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
);

const app = (
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
