import React from 'react';
import CommentsListContainer from './CommentsListContainer';
import AddCommentContainer from './AddCommentContainer';
import {hot} from 'react-hot-loader';
import DevTools from '../redux/DevTools';
import '../styles/app.css';

const App = () => {
  return (
    <div className="App">
      <CommentsListContainer/>
      <AddCommentContainer/>
      <DevTools/>
    </div>
  );
}

export default hot(module)(App);