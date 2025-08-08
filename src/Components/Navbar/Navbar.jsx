import React from 'react';
import './Navbar.css';
import { BiAperture } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <button className="logo" onClick={() => navigate('/')}>
        <BiAperture />
      </button>

      <div className='nav-menu'>
        <button className='nav-button' onClick={() => navigate('/')}>Home</button>
        <button className='nav-button' onClick={() => navigate('/about')}>About Me</button>
        <button className='nav-button' onClick={() => navigate('/portfolio')}>Portfolio</button>
        <button className='nav-button' onClick={() => navigate('/contact')}>Contact</button>
      </div>

      <div className="nav-connect">
        <button onClick={() => navigate('/connect')}>Connect With Me</button>
      </div>
    </div>
  );
};

export default Navbar;
