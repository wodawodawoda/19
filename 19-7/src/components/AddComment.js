import React from 'react';

const AddComment = ({addComment}) =>
  <input onKeyDown={(e) => addComment(e.target.value, e.keyCode)}
         type="text"
         className="add-comment"/>

export default AddComment