import {connect} from 'react-redux';
import Comment from './Comment';
import { rateComment, editComment, deleteComment, makeEditable } from '../redux/actions';


const mapDispatchToProps = dispatch => ({
  rateComment: (id, up) => dispatch(rateComment(id, up)),
  editComment: (id, text, key, target) => {
    if(key !== 13) return;
    target.contentEditable = false;
    dispatch(makeEditable(id, false));
    dispatch(editComment(id, text));
    target.nextElementSibling.lastChild.firstChild.classList.toggle("comment__btn--active");
  },
  deleteComment: (id) => dispatch(deleteComment(id)),
  makeEditable: (id, bool, e) => {
    if (!bool) {
      dispatch(editComment(id, e.target.parentElement.parentElement.previousElementSibling.textContent));
      e.target.parentElement.previousElementSibling.checked = false;
    }
    e.target.classList.toggle("comment__btn--active");
    dispatch(makeEditable(id, bool));
  }
});

const mapStateToProps = (state, ownProps) => ({
  editable: ownProps.editable
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);

