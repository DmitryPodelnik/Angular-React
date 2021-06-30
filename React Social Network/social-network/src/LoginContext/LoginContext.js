import React from "react";

export const LoginContext = React.createContext({
    isLogged: false, 
    currentUserId: -1,
    toggleLogging: () => {}, 
});

