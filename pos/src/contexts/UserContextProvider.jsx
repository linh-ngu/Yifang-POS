import React, { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
/**
 * @returns and maintains current state of user for login purposes
 */
export const UserContext = createContext();

export const UserContextProvider = (props) => {

    const [user, setUser] = useState("");

    // const handleCallbackResponse = (response) => {
    //     console.log("Encoded JWT ID token: " + response.credential);
    //     var userObject = jwtDecode(response.credential);
    //     console.log(userObject);
    //     console.log(userObject.name);
    //     setUser(userObject);
    //     document.getElementById("signInDiv").hidden = true;
    // };

    function handleCallbackResponse(response) {
        
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        console.log(userObject.name);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    };

    const contextValue = {user, setUser, handleCallbackResponse};

    return (
        <UserContext.Provider value={contextValue}>{props.children}</UserContext.Provider>
    )
};