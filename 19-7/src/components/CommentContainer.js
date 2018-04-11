import {connect} from 'react-redux';
import Comment from './Comment';
import {rateComment} from '../redux/actions';

const mapDispatchToProps = dispatch => ({
  rateComment: (id, up) => dispatch(rateComment(id, up)),
});

export default connect(null, mapDispatchToProps)(Comment);