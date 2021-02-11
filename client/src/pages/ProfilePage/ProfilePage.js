import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../actions/userActions";

export default function ProfilePage(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/login");
  }


  return <div className="profile">
    <div className="profile-info">
      <div className="form">
        <form >
          <ul className="form-container">
            <li>
              <h2>Особистий кабінет</h2>
            </li>

            <li>
              <button type="button" onClick={handleLogout} className="button secondary full-width">Вийти</button>
            </li>

          </ul>
        </form>
      </div>
    </div>
  </div>
}
