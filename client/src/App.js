import './App.css';
import React, {Component} from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import {useSelector} from 'react-redux'

import Main from './pages/MainPage/Main';
import Games from './pages/GamesPage/Games';
import Header from "./components/Header/Header";
import FirstClassGamesPage from './pages/GamesPage/1classGamesPage/FirstClassGamesPage';
import ChooseTestPage from "./pages/GamesPage/ChooseTestPage/ChooseTestPage";
import LoginPage from "./pages/LoginRegisterPage/LoginPage";
import RegisterPage from "./pages/LoginRegisterPage/RegisterPage";
import ProfileScreen from "./pages/ProfilePage/ProfilePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import SecondClassTestPage from './pages/GamesPage/2classTestPage/SecondClassTestPage'
import ThirdClassTestPage from './pages/GamesPage/3classTestPage/ThirdClassTestPage'
import FourthClassTestPage from './pages/GamesPage/4classTestPage/FourthClassTestPage'

export default function App() {
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  return(
    <BrowserRouter>
      <div className="container">
        <Header/>
        <main>
          <Route exact path='/' component={Games}/>
          <Route exact path='/games' component={Games}/>
          <Route exact path='/login' component={LoginPage}/>
          <Route exact path='/register' component={RegisterPage}/>
          <Route exact path='/profile' component={ProfileScreen}/>
          <Route exact path='/games/1class-games' component={FirstClassGamesPage}/>
          <Route exact path='/games/2class-games' component={SecondClassTestPage}/>
          <Route exact path='/games/3class-games' component={ThirdClassTestPage}/>
          <Route exact path='/games/4class-games' component={FourthClassTestPage}/>
          <Route exact path='/games/classNumber/:id' component={ChooseTestPage}/>
          <Route exact path='/games/classNumber/:id/category/:cat' component={ChooseTestPage}/>
          <Route path='/quiz/:id' component={QuizPage}/>
        </main>
      </div>
    </BrowserRouter>
  )
}
