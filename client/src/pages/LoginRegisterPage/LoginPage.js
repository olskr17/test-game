import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin} from '../../actions/userActions';

function LoginPage(props){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();
  const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  }

  const container = {
    width: '500px',
    height: 'auto',
    margin: '0 auto',
    textAlign: 'center'
  }

    return (
      <div style={container}>
        <form onSubmit={submitHandler} >
          <ul className="form-container">
            <li>
              <h2>Вхід</h2>
            </li>
            <li>
              {loading && <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'large'}}>Loading...</div>}
              {error && <div>{error}</div>}
            </li>
            <li>
              <label htmlFor="email">
                Електронна пошта
              </label>
              <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
              </input>
            </li>
            <li>
              <label htmlFor="password">Пароль</label>
              <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
              </input>
            </li>
            <li>
              <button type="submit" className="button primary">Увійти</button>
            </li>
            <li>
              Немає особистого кабінету?
            </li>
            <li>
              <Link to={redirect === "/" ? "register" : "register?redirect=" + redirect} className="button secondary text-center" style={{'textDecoration': 'underline'}}>Зареєструватися</Link>
            </li>
          </ul>
        </form>
      </div>
    );
}

export default LoginPage;
