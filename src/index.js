import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';
import routes from './routes';
import setAuthorizationToken from 'utils/setAuthorizationToken';
import {setCurrentUser} from 'actions/userActions';
import jwtDecode from 'jwt-decode';
import {createHistory} from 'history';

const store = createStore(rootReducer, applyMiddleware(thunk));


if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('app')
);