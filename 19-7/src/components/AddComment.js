import React from 'react';

const AddComment = ({addComment}) =>
  <input onKeyDown={(e) => addComment(e.target, e.keyCode)}
         type="text"
         className="App__add-comment"/>

export default AddComment