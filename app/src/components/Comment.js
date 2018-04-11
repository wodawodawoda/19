import React from 'react';

const Comment = ({text, votes, id, rateComment}) =>
  <li className="comment">
    Message: {text}<span className="votes">votes: {votes}</span>
    <button onClick={() => rateComment(id, true)}>Thumb up</button>
    <button onClick={() => rateComment(id, false)}>Thumb down</button>
  </li>

export default Comment;