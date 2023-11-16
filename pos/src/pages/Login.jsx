import React from "react";
import { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

function Login() {
    const [user, setUser]= useState({});

    function handleCallbackResponse(response) {
        
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwtDecode(response.credential);
        console.log(userObject);
        console.log(userObject.name);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "659412670449-bqubbteq6sk1dfk903m8mdh7onu59j4r.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        )

        google.accounts.id.prompt();
    }, []);

    // If we have no user: sign in button
    // If we have a user: show the log out button

    return (
        <div>
            <div id='signInDiv' className="absolute top-[150px] w-full flex justify-center"></div>
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            { Object.keys(user).length != 0 &&
                <button onClick = {(e) => handleSignOut(e)}>Sign Out</button>
            }
            { user &&
                <div>
                    {/* <img src={user.picture}></img> */}
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img src={user.picture} referrerPolicy="no-referrer"></img>
                    <p>{user.name}</p>
                </div>
            }

        </div>
    )
}

export default Login;