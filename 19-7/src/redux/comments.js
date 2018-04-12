import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, RATE_COMMENT  } from './actions'

export function comments(state = [], action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [{
        id: action.id,
        text: action.text,
        votes: 0
      }
        , ...state];
    case EDIT_COMMENT:
      return state.map(val => {
        if(val.id === action.id) {
          val.text = action.text
        }
        return val
      });
    case DELETE_COMMENT:
      return state.filter(comment => comment.id !== action.id);
    case RATE_COMMENT:
      return state.map(val => {
        if(val.id === action.id) {
          return action.rate ? {...val, votes: val.votes + 1} : {...val, votes: val.votes - 1}
        }
        return val
      });
    default:
      return state;
  }
}