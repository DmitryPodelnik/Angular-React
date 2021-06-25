import React from 'react'
import ReactDOM from 'react-dom'

import SocialNetwork from './components/App/SocialNetwork'
import {LoginContext} from './LoginContext/LoginContext'

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(

    <LoginContext.Provider value={false}>
        <SocialNetwork/>
    </LoginContext.Provider>,
    document.getElementById("root")
)