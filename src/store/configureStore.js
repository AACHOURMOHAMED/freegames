import { configureStore, applyMiddleware, compose } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = configureStore({
  reducer: rootReducer,
  composeEnhancers: composeEnhancers(applyMiddleware(thunk, logger)),
});

export default store;
