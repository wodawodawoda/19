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
    <span onKeyDown={(e) => editComment(id, e.target.textContent, e.keyCode, e.target)}
          contentEditable={`${editable}`}
          className="comment__text">{text}</span>
    <div className="comment__options">
      <input type="checkbox" className="comment__options-open" id="openMenu" />
      <div className="comment__options--inner">
        <button onClick={editable ? (e) => makeEditable(id, false, e) : (e) => makeEditable(id, true, e)}
                className="comment__btn comment__btn--edit">✎</button>
        <button onClick={() => deleteComment(id)} className="comment__btn comment__btn--delete">✘</button>
      </div>
    </div>
  </li>;

export default Comment;
