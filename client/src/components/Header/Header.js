import React, {Component} from 'react';
import './Header.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Header(){
  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

    return (
      <header>
        <nav>
          <ul className='navigation'>
            <li className='navigation-item'><Link to='/'>Тест-гра</Link></li>
            <li className='navigation-item'><Link to='/games'>Перевірка знань</Link></li>
            <li className='navigation-item'>{
              userInfo ? <Link to="/profile">{userInfo.name}</Link> :
                <Link to="/login">Вхід</Link>
            }
            </li>
          </ul>
        </nav>
      </header>
    );

}

