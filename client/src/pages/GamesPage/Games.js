import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Games.css'

class Games extends Component {
  render() {
    return (
      <div className='games-container'>
        <ul className='gamesList'>
          <li className='gamesList-item'><Link to='/games/1class-games'>1 клас</Link></li>
          <li className='gamesList-item'><Link to='/games/2class-games'>2 клас</Link></li>
          <li className='gamesList-item'><Link to='/games/3class-games'>3 клас</Link></li>
          <li className='gamesList-item'><Link to='/games/4class-games'>4 клас</Link></li>
        </ul>
      </div>
    );
  }
}

export default Games;
