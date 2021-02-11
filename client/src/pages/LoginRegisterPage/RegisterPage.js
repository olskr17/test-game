import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../actions/userActions';

function RegisterPage(props) {

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
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
    dispatch(register(name, surname, email, password));
  }
  return <div className="form">
    <form onSubmit={submitHandler} >
      <ul className="form-container">
        <li>
          <h2>Створити особистий кабінет</h2>
        </li>
        <li>
          {loading && <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'large'}}>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
        <li>
          <label htmlFor="name">
            Ім'я
          </label>
          <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="surname">
            Прізвище
          </label>
          <input type="text" name="surname" id="surname" onChange={(e) => setSurname(e.target.value)}>
          </input>
        </li>
        <li>
          <label htmlFor="email">
            Пошта
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
          <label htmlFor="rePassword">Повторіть пароль</label>
          <input type="password" id="rePassword" name="rePassword" onChange={(e) => setRePassword(e.target.value)}>
          </input>
        </li>
        <li>
          <button type="submit" className="button primary">Зареєструватись</button>
        </li>
        <li>
          Зареєстровані в системі?
          <Link to={redirect === "/" ? "login" : "login?redirect=" + redirect} className="button secondary text-center" style={{'textDecoration': 'underline'}}>Увійти</Link>

        </li>

      </ul>
    </form>
  </div>
}
export default RegisterPage;
