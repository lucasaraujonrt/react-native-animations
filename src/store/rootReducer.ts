import { combineReducers } from 'redux';

import loadingReducer from './Loading/reducer';
import webReducer from './Web/reducer';

const reducers = combineReducers({
  loading: loadingReducer,
  web: webReducer,
});

const rootReducer = (state: any, action: any) => reducers(state, action);

export default rootReducer;
