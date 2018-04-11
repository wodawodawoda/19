import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, RATE_COMMENT  } from './actions'

const initialState = {
  comments: [],
  users: []
}

function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        taxt: action.text,
        votes: 0
      }
        , ...state.comments];
    case EDIT_COMMENT:
      return state.comments.map(val => {
        if(val.id === action.id) {
          val.text = action.text
        }
      });
    case DELETE_COMMENT:
      return state.comments.filter(comment => comment.id !== action.id);
    case RATE_COMMENT:
      return state.comments.map(val => {
        if(val.id === action.id) {
          action.rate ? val.votes++ : val.votes--
        }
      });
    default:
      return state;
  }
}

export default comments;