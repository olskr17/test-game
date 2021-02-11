import Axios from "axios";
import Cookie from 'js-cookie';
import {
  QUIZ_LIST_REQUEST, QUIZ_LIST_SUCCESS, QUIZ_LIST_FAIL, QUIZ_DETAILS_REQUEST, QUIZ_DETAILS_SUCCESS, QUIZ_DETAILS_FAIL
} from "../constants/quizConstants";
import axios from "axios";

const listQuizes =(
  classNumber = "",
  category=""
) => async (dispatch) => {
  try{
    dispatch({type: QUIZ_LIST_REQUEST});
    const {data} = await Axios.get(
      "/api/quiz?classNumber="+
      classNumber +
      "&category=" +
      category
    );
    dispatch({type: QUIZ_LIST_SUCCESS, payload: data});
  } catch (error){
    dispatch({type: QUIZ_LIST_FAIL, payload: error.message})
  }
};

const quizDetails = (quizId) => async (dispatch) => {
  try{
    // dispatch({type: QUIZ_DETAILS_REQUEST, payload: quizId});
    const {data} = await axios.get('/api/quiz/' + quizId);
    dispatch({type: QUIZ_DETAILS_SUCCESS, payload: data});
  } catch (error){
    dispatch({type: QUIZ_DETAILS_FAIL, payload: error.message});
  }

}

export {listQuizes, quizDetails}

