import uuid from 'uuid';

export const ADD_COMMENT = 'ADD_COMMENT',
  EDIT_COMMENT = 'EDIT_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
  RATE_COMMENT = 'RATE_COMMENT';

function addComment (text = '') {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text
  }
}

function editComment (id, text = '') {
  return {
    type: EDIT_COMMENT,
    id,
    text
  }
}

function deleteComment (id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

function rateComment (id, rate = false) {
  return {
    type: RATE_COMMENT,
    id,
    rate
  }
}