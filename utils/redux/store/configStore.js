import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers/rootReducers';

const enhancer = composeWithDevTools(applyMiddleware(thunk))

const store = createStore(rootReducers, enhancer)
export default store;
