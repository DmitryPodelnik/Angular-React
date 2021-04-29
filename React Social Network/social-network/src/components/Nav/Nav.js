import React from 'react';
//import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom'

//localStorage.setItem("signInLogOut", "Sign In");

const Nav = () => ( 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="/">Activity Feed</a> */}
      <NavLink exact to="/" className="navbar-brand">Activity Feed</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"> 
            {/* <a className="nav-link active" aria-current="page" href="profile">Profile</a> */}
            <NavLink to={`/users/profile`} className="nav-link" >Profile</NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/auth">Sign In Test</a> */}
            <NavLink to="/auth" className="nav-link" >Sign In TEST</NavLink>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/reg">Sign Up TEST</a> */}
            <NavLink to="/reg" className="nav-link" >Sign Up TEST</NavLink>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/friends">Friends</a>
            <NavLink to="/friends" className="nav-link" >Friends</NavLink>
          </li> */}
          <li className="nav-item">
            {/* <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Test</a> */}
            <NavLink to="/users" className="nav-link">All Users</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

// Nav.propTypes = {};

// Nav.defaultProps = {};

export default Nav; 