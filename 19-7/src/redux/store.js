import {createStore} from 'redux';
import reducer from './reducer.js';
import DevTools from './DevTools';

export const store = createStore(reducer, DevTools.instrument());

// Create listener
const unsubscribe = store.subscribe(() => console.log('zmiana w stanie: subscribe'));
// Remove listener
unsubscribe();
// Get actual state on every state change
store.subscribe(() => console.log(store.getState()));
