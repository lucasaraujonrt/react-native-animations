import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const init = () => createStore(rootReducer, compose(applyMiddleware(thunk)));

const store = init();

export default store;
