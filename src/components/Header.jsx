import React from 'react';
import { Link } from 'react-router-dom';
import wikipedia from '../assets/images/1.webp';

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <img src={wikipedia}/>
      <img src='../assets/images/1.webp'/>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
