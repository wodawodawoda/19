import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import {addComment, rateComment} from './redux/actions';
import reducer from './redux/reducer';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));