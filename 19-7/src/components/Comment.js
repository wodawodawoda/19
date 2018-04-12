import React from 'react';

const Comment = ({text, votes, id, rateComment, editComment, deleteComment}) =>
  <li className="comment">
    Message: {text}<span className="votes">votes: {votes}</span>
    <button onClick={() => rateComment(id, true)}>Thumb up</button>
    <button onClick={() => rateComment(id, false)}>Thumb down</button>
    <input type="text" onKeyDown={(e) => editComment(id, e.target.value, e.keyCode)}/>
    <button onClick={() => deleteComment(id)} className="delete">Delete</button>
  </li>

export default Comment;