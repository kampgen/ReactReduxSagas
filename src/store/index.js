import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import reducers from '../reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers(reducers),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);

export default store;