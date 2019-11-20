import React from 'react';
import { Link } from 'react-router-dom';
import wikipedia from '../assets/images/1.webp';

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <img src={wikipedia}/>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link> | <Link to="/admin">Admin</Link>
    </div>
  );
}

export default Header;
