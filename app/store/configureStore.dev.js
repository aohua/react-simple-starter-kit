import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import { fromJS } from 'immutable';
import { actionStorageMiddleware, createStorageListener } from 'redux-state-sync';
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import createLogger from 'redux-logger';

import createReducer from '../reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

export default function configureStore(initialState = {}, history) {
  const middlewares = [
    sagaMiddleware,
    logger,
    actionStorageMiddleware,
    routerMiddleware(history),
  ];
  const store = createStore(
    createReducer(),
    fromJS(initialState),
    applyMiddleware(...middlewares)
  );

  /*
  *  Create a listener on store to dispatch the latest action being triggered on other tabs.
  */
  createStorageListener(store);
  // Create hook for async sagas
  store.runSaga = sagaMiddleware.run;

  store.asyncReducers = {};
  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);
        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
