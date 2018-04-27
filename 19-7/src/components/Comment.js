import React from 'react';

const Comment = ({text, votes, id, rateComment, editComment, deleteComment, makeEditable, editable}) =>
  <li className="comment">
    <div className="comment__votes">
      <input type="checkbox"
             onClick={() => rateComment(id, true)}
             className="comment__btn comment__btn--up" />
      <span className="comment__vote">{votes}</span>
      <input type="checkbox" onClick={() => rateComment(id, false)} className="comment__btn comment__btn--down" />
    </div>
    <span onKeyDown={(e) => editComment(id, e.target.textContent, e.keyCode, e.target)} contentEditable={`${editable}`} className="comment__text">{text}</span>
    <div className="comment__options">
      <input type="checkbox" className="comment__options-open" />
      <div className="comment__options--inner">
        <button onClick={() => makeEditable(id, true)} className="comment__btn comment__btn--edit" />
        <button onClick={() => deleteComment(id)} className="comment__btn comment__btn--delete">✘</button>
        {/*<input type="text" onKeyDown={(e) => editComment(id, e.target.value, e.keyCode)} className="comment__edit"/>*/}
      </div>
    </div>
  </li>

export default Comment;
