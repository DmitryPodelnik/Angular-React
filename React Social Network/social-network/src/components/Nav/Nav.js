import React from 'react';
import {NavLink} from 'react-router-dom'
import {LoginContext} from "../../LoginContext/LoginContext"

class Nav extends React.Component{

  constructor(props)   {
      super(props);

      this.state = {

          
      };
  }


  render() {

      return (
          <div id="main">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                  <NavLink exact to="/" className="navbar-brand">Activity Feed</NavLink>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <NavLink to="/users" className="nav-link" activeClassName="active">All Users</NavLink>
                      </li>
                      {this.context
                        ? <li className="nav-item"> 
                           <NavLink to={`/profile/:id(\d+)`} className="nav-link" activeClassName="active">Profile</NavLink>
                         </li>
                        : null 
                      }
                      <li className="nav-item">
                        <NavLink to="/auth" className="nav-link" activeClassName="active">
                          {this.context
                           ? <span>Log In</span>
                           : <span>Log out</span>
                          }
                          
                          </NavLink>
                      </li>
                      {!this.context.isLogged
                        ? <li className="nav-item">
                           <NavLink to="/reg" className="nav-link" activeClassName="active">Sign Up</NavLink>
                          </li>
                        : null
                      }
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
      )
  } 
}

Nav.contextType = LoginContext;

export default Nav;

