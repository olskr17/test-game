import React, {Component, useEffect} from 'react';
import './FIrstClassGamesPage.css';
import {Link} from "react-router-dom";

import {useDispatch} from "react-redux";

function FirstClassGamesPage(props)  {
  const classNumber = props.match.params.id ? props.match.params.id : '';
  const dispatch = useDispatch();
  useEffect(()=>{

  }, )

    return (
      <div className='games-container'>

        <ul className='gameListInClass'>

          <li className='gameListInClass-item'>
            <Link to='/games/classNumber/2/category/reading'> Читання </Link>
          </li>
          <li className='gameListInClass-item'><Link to={'/games/classNumber/2/category/math'}>Математика</Link></li>
        </ul>
      </div>
    );

}

export default FirstClassGamesPage;
