import React from 'react';
import CommentsListContainer from './CommentsListContainer'
import AddCommentContainer from './AddCommentContainer'
import DevTools from '../redux/DevTools'
import '../styles/app.css'

const App = () => {
  return (
    <div className="App">
      <AddCommentContainer/>
      <CommentsListContainer/>
      <DevTools/>
    </div>
  );
}

export default App;