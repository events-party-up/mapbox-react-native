import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Sagas from './sagas';
import Reducers from './reducers';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [
  sagaMiddleware,
];

const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;
const Store = createAppropriateStore(Reducers, applyMiddleware(...middleware));

sagaMiddleware.run(Sagas);

export default Store;
