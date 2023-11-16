import React, {useState} from "react";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


function Login() {

    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
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
    }, []);

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

export default Login