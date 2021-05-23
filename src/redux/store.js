import { configureStore,  getDefaultMiddleware} from '@reduxjs/toolkit'
import searchReducer from './searchSlice';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const devMode = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export default configureStore({
  reducer: {
    search: searchReducer,
  },
    devTools: devMode,
    middleware
})
sagaMiddleware.run(rootSaga)