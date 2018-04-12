import React from 'react';
import Comment from './CommentContainer';

const CommentsList = ({comments}) =>
  <ul className="comments">{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;