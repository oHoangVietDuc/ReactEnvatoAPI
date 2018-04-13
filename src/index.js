import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import history from './history';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './scss/site.scss';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </Router>
  , document.getElementById('root')
);

registerServiceWorker();
