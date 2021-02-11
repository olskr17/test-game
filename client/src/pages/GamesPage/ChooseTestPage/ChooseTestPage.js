import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {listQuizes} from "../../../actions/quizActions";
import './ReadingTest.css'
import {Link} from "react-router-dom";

function ChooseTestPage(props) {
  const QuizList = useSelector(state => state.quizList);
  const classNumber = props.match.params.id ? props.match.params.id : '';
  const category = props.match.params.cat ? props.match.params.cat : '';
  const {quizList, error} = QuizList;
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(listQuizes(classNumber, category));
  }, [classNumber, category])


  return (
      <div className='quiz-container'>
        <h2>Оберіть тест</h2>
        <div className="quizList">
          <ul className="quizList-ul">
            {
              quizList.map(quiz => <li key={quiz._id}><Link to={'/quiz/'+quiz._id}>{quiz.nameOfQuestion}</Link></li>)
            }
          </ul>
        </div>
      </div>
    );

}

export default ChooseTestPage;
