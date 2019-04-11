import { INCREMENT, DECREMENT } from '../actions/counteractions'

const counterReducer = (store = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return store + 1;
        case DECREMENT:
            return store - 1;
        default:
            return store;
    }
}

export { counterReducer };