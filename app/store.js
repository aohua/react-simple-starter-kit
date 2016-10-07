import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'

import reducer from './reducers'

// create the saga middleware
export default function configureStore() {
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

store.runSaga = sagaMiddleware.run
store.close = () => store.dispatch(END)
return store;
}
