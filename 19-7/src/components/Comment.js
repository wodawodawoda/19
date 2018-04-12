import React from 'react';

const Comment = ({text, votes, id, rateComment, editComment, deleteComment}) =>
  <li className="comment">
    <span className="comment__text">{text}</span>
    <span className="comment__votes">votes: {votes}</span>
    <button onClick={() => rateComment(id, true)} className="comment__btn comment__btn--up">Thumb up</button>
    <button onClick={() => rateComment(id, false)} className="comment__btn comment__btn--down">Thumb down</button>
    <input type="text" onKeyDown={(e) => editComment(id, e.target.value, e.keyCode)} className="comment__edit"/>
    <button onClick={() => deleteComment(id)} className="comment__delete">Delete</button>
  </li>

export default Comment;