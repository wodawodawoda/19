import {createStore} from 'redux';
import reducer from './reducer.js';
import DevTools from './DevTools';

export const store = createStore(reducer, DevTools.instrument());
