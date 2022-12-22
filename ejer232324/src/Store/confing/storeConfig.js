
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducer/rootReducer';
import { watcherSaga } from '../sagas/Sagas';

export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools());

    return store;
}

export const createAppAsyncStore = () => {

    let store = createStore(rootReducer,composeWithDevTools())

    return store;
}
