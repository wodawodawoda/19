import {connect} from 'react-redux';
import AddComment from './AddComment';
import {addComment} from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  addComment: (text, key) => {
    if(key !== 13) return
    dispatch(addComment(text))
  }
});

export default connect(null, mapDispatchToProps)(AddComment);