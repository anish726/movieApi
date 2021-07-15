import React from 'react';
import ReactDOM from 'react-dom';
 import {createStore,applyMiddleware,compose} from 'redux'
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/movieSagaRoot';

const sagaMiddleware = createSagaMiddleware();

const store =  compose(applyMiddleware(sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

(createStore)(rootReducer)


sagaMiddleware.run(rootSaga)
ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);


