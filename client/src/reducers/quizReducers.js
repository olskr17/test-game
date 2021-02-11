import {
  QUIZ_LIST_REQUEST,
  QUIZ_LIST_SUCCESS,
  QUIZ_LIST_FAIL,
  QUIZ_DETAILS_REQUEST,
  QUIZ_DETAILS_FAIL,
  QUIZ_DETAILS_SUCCESS
} from '../constants/quizConstants';

function quizListReducer(state = {quizList: []}, action) {
  switch (action.type) {
    case QUIZ_LIST_REQUEST:
      return {loading: true, quizList: []};
    case  QUIZ_LIST_SUCCESS:
      return {loading: false, quizList: action.payload};
    case QUIZ_LIST_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state
  }
}

function quizDetailsReducer(state = {quiz: {}}, action) {
  switch (action.type) {
    case QUIZ_DETAILS_REQUEST:
      return {loading: true};
    case QUIZ_DETAILS_SUCCESS:
      return {loading: false, quiz: action.payload};
    case QUIZ_DETAILS_FAIL:
      return {loading: false, error: action.payload}
    default:
      return state;
  }
}

export {
  quizListReducer, quizDetailsReducer
}
