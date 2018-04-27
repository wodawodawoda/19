import {connect} from 'react-redux';
import AddComment from './AddComment';
import {addComment} from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  addComment: (target, key) => {
    if(key !== 13) return;
    dispatch(addComment(target.value));
    target.value = '';
  }
});

export default connect(null, mapDispatchToProps)(AddComment);