import {connect} from 'react-redux';
import Comment from './Comment';
import {rateComment, editComment, deleteComment} from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  rateComment: (id, up) => dispatch(rateComment(id, up)),
  editComment: (id, text, key) => {
    if(key !== 13) return
    dispatch(editComment(id, text))
  },
  deleteComment: (id) => dispatch(deleteComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);

