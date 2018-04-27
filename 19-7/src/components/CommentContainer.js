import {connect} from 'react-redux';
import Comment from './Comment';
import { rateComment, editComment, deleteComment, makeEditable } from '../redux/actions'

const mapDispatchToProps = dispatch => ({
  rateComment: (id, up) => dispatch(rateComment(id, up)),
  editComment: (id, text, key, target) => {
    if(key !== 13) return;
    target.contentEditable = false;
    dispatch(makeEditable(id, false))
    dispatch(editComment(id, text));

  },
  deleteComment: (id) => dispatch(deleteComment(id)),
  makeEditable: (id, bool) => dispatch(makeEditable(id, bool))
});

const mapStateToProps = (state, ownProps) => ({
  // console.log(state)
  editable: ownProps.editable
})

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

