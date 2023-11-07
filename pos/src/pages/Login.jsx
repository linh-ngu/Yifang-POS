import React from "react";
import { useEffect } from 'react';

function Login() {

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
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
    }, []);

    return (
        <div id='signInDiv' className="absolute top-[150px] w-full flex justify-center"></div>
    )
}

export default Login