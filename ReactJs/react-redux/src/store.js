import { createStore } from 'redux';
import { counterReducer } from './reducers/counterreducers';

const appStore = createStore(counterReducer);

export default appStore;