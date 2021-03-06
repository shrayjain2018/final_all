import { createStore } from 'redux';

const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;