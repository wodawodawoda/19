import uuid from 'uuid';
import {ADD_COMMENT, EDIT_COMMENT, MAKE_EDITALBLE, DELETE_COMMENT, RATE_COMMENT} from './actionTypes';

export function addComment (text = '') {
  return {
    type: ADD_COMMENT,
    id: uuid.v4(),
    text
  }
}

export function editComment (id, text = '') {
  return {
    type: EDIT_COMMENT,
    id,
    text
  }
}

export function makeEditable (id, bool) {
  return {
    type: MAKE_EDITALBLE,
    id,
    editable: bool
  }
}

export function deleteComment (id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

export function rateComment (id, rate = false) {
  return {
    type: RATE_COMMENT,
    id,
    rate
  }
}

