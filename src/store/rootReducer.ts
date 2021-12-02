import { combineReducers } from 'redux';
import loadingReducer from './Loading/reducer';

const reducers = combineReducers({
  loading: loadingReducer,
});

const rootReducer = (state: any, action: any) => reducers(state, action);

export default rootReducer;
