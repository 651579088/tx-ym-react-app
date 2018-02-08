import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import routerList from 'src/router/index';
import reducers from 'src/store/reducers/index'

const store = createStore(reducers)
ReactDOM.render(
  <Provider store={store}>
    {routerList}
  </Provider>,
  document.getElementById('root')
);