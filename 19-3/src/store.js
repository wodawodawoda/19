import {addComment} from './actions'
import {createStore} from 'redux';
import app from './reducer.js';

const store = createStore(app);

// Create listener
const unsubscribe = store.subscribe(() => console.log('zmiana w stanie: subscribe'));
// Remove listener
unsubscribe();
// Get actual state on every state change
store.subscribe(() => console.log(store.getState()));
// Send action to change state
store.dispatch(addComment('pierwszy komentarz: store.dispatch()'));
store.dispatch(addComment('drugi komentarz: store.dispatch()'));
