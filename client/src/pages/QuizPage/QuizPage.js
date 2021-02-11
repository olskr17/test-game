import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {quizDetails} from '../../actions/quizActions';
import './QuizPage.css';
import AnswerPage from "../GamesPage/answerPage";

function QuizPage(props){
  const QuizDetails = useSelector(state => state.quizDetails);
  const {quiz, error} = QuizDetails;
  const [show, setShow] = useState(false)
  const dispatch = useDispatch();
  useEffect( ()=> {
      dispatch(quizDetails(props.match.params.id));

  },[]);
  console.log(quiz)
  console.log(quiz.questions)

  function showChange() {
    return setShow(true);
  }

  return (
      <div className='quiz-container'>
        <h1>{quiz.nameOfQuestion}</h1>
        {
          quiz.questions === undefined ?
            <h3>Щось пішло не так</h3> :
            <div>
              <p>{quiz.generalQuestion}</p>
              <ul>
                {quiz.questions.map(item=>
                  <li key={item._id}>
                    <h4>{item.mainQuestion}</h4>
                    <div className='input-box'>
                      <div className="">
                        <input type="checkbox" id='answ1' value='answ1' className='question-checkbox'/>
                        <label htmlFor="answ1">{item.possibleAnswer1}</label>
                      </div>
                      <div className="">
                        <input type="checkbox" id='answ2' value='answ2'/>
                        <label htmlFor="answ2">{item.possibleAnswer2}</label>
                      </div>
                      {/*<input type="checkbox" id='answ3' value='answ3'/>*/}
                      {/*<label htmlFor="answ3">{item.possibleAnswer3}</label>*/}
                      {/*<input type="checkbox" id='answ4' value='answ4'/>*/}
                      {/*<label htmlFor="answ4">{item.possibleAnswer4}</label>*/}
                    </div>
                  </li>
                )}
              </ul>
              <button type={"submit"} onClick={showChange}>Перевірити</button>
            </div>
        }
        {
          show ? <AnswerPage style={{margin: "2rem"}}/> : <div></div>
        }
      </div>
    );
}

export default QuizPage;
