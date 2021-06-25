import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import Routing from '../../routes/route'
import {LoginContext} from '../../LoginContext/LoginContext'

import "./SocialNetwork.css";


// function SocialNetwork() {
 
     

//     return (
//         <div>
//             <BrowserRouter>
//                 <Routing/>
//             </BrowserRouter>
//         </div>
//     )
// }
 
// export {SocialNetwork};


export default class SocialNetwork extends React.Component { 

    constructor(props) {
        super(props);
    
        this.toggleLogging = () => {
          this.setState(state => ({
            isLogged: !state.isLogged,
          }));
        };
    
        // Состояние хранит функцию для обновления контекста,
        // которая будет также передана в Provider-компонент.
        this.state = {
            isLogged: false,
            toggleLogging: this.toggleLogging,
        };
      }
 
    render() {
        return (
            <div>
                <LoginContext.Provider value={this.state}>
                    <BrowserRouter>
                        <Routing/>
                    </BrowserRouter>
                </LoginContext.Provider>
            </div>
        )
    }
};