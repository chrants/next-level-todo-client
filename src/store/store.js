import { createStore } from 'redux';
import AppReducer from './reducers';

const Store = createStore(AppReducer);

export default Store;