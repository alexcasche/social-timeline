import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './constants/globalStyle'
import AppContainer from './containers/AppContainer';

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle />
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);