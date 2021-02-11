import React, {Component, useEffect} from 'react';
import './FIrstClassGamesPage.css';
import {Button, Dialog, AppBar, IconButton} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {Link} from "react-router-dom";

import ChooseTestPage from "../ChooseTestPage/ChooseTestPage";
import {useDispatch, useSelector} from "react-redux";
import {listQuizes} from "../../../actions/quizActions";

function FirstClassGamesPage(props)  {
  const classNumber = props.match.params.id ? props.match.params.id : '';
  const dispatch = useDispatch();
  useEffect(()=>{

  }, )

    return (
      <div className='games-container'>

        <ul className='gameListInClass'>

          <li className='gameListInClass-item'>
            <Link to='/games/classNumber/1/category/reading'> Читання </Link>
          </li>
          <li className='gameListInClass-item'><Link to={'/games/classNumber/1/category/math'}>Математика</Link></li>
        </ul>
      </div>
    );

}

export default FirstClassGamesPage;
