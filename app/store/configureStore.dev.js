import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createLogger from 'redux-logger';

import reducer from '../reducers';

export default function configureStore() {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    applyMiddleware(
      sagaMiddleware,
      createLogger()
    )
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
