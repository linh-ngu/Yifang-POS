import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

function Login() {
    const [user, setUser]= useState({});

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

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

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleLogin = async () => {
        const result = await checkStaff(inputValue);
        if (result === 'manager') {
            navigate('/redirect');
        } else if (result === 'cashier') {
            navigate('/cashier');
        } else if (result === 'customer') {
            navigate('/order');
        }
    };

    const checkStaff = (id) => {
        if (id < 10 && id > 1) {
          return "cashier";
        } else if (id == 10) {
          return 'manager';
        } else {
          return "customer";
        }
    };

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
        <div className='absolute top-[150px] w-full flex flex-col justify-center items-center p-4'>
            <h1 className='font-bold text-4xl text-center m-4'>Log In</h1>
            <input className="border m-2 p-1 text-center" type="text" value={inputValue} onChange={handleInputChange}/>
            <div className="flex">
                <button className="border m-2 p-2 rounded-sm" onClick={() => {handleLogin();}}>Log In</button>
                <div id='signInDiv' className="p-2 rounded-sm"></div>
            </div>
        </div>
    )
}

export default Login;