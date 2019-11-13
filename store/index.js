import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import { persistStore, persistCombineReducers } from 'redux-persist';

import rootSaga from './sagas/index';
import { rootReducers } from './reducers/index';

const logger = createLogger({ collapsed: true });
const storage = require('redux-persist/lib/storage').default;
const persistConfig = { key: 'root', storage, whitelist: ['problems', 'lessons', 'passages']  };
const sagaMiddleware = createSagaMiddleware()

export function configureStore(preloadedState, {isServer, req = null}) {

    const isClient = typeof window !== 'undefined';
    if(isClient && !isServer){
      const middlewares = [thunk, sagaMiddleware, isClient && logger].filter(Boolean);
      const enhancer = compose(applyMiddleware(...middlewares));
      const persistedReducer = persistCombineReducers(persistConfig, rootReducers);
      const store = createStore(persistedReducer, preloadedState, enhancer);
      store.__PERSISTOR = persistStore(store);
      store.sagaTask = sagaMiddleware.run(rootSaga)
      return store
    } else {
      const middlewares = [thunk, sagaMiddleware].filter(Boolean);
      const enhancer = compose(applyMiddleware(...middlewares));
      const store = createStore(combineReducers(rootReducers), preloadedState, enhancer);
      store.sagaTask = sagaMiddleware.run(rootSaga)
      return store
    }
}

