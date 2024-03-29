import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import Footer from "../components/Footer";
import { UserContext } from '../contexts/UserContextProvider';

/**
 * 
 * @returns and renders the html code that builds the login page using Google OAuth
 */

function Login() {
    
    // const [myUser, setUser]= useState({});
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const [isSignedIn, setIsSignedIn] = useState(true);
    const { handleCallbackResponse } = useContext(UserContext);
    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext);
    const [staff, setStaff] = useState('');
    var email = user.email;

    // function handleCallbackResponse(response) {
        
    //     console.log("Encoded JWT ID token: " + response.credential);
    //     var userObject = jwtDecode(response.credential);
    //     console.log(userObject);
    //     console.log(userObject.name);
    //     setUser(userObject);
    //     document.getElementById("signInDiv").hidden = true;
    // }
    const getStaffID = async() => {
        try {
            const body = { email };
            // const response = await fetch("https://yifang-backend.onrender.com/inventory/addIngredient", {
            //   method: "POST",
            //   headers: { "Content-Type": "application/json" },
            //   body: JSON.stringify(body)
            // });
            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            console.log("HELLO: " + data[0].staff_id);
            setStaff(data[0].staff_id);
            // onClose();
        
            //   window.location = "/";
        } catch (err) {
        console.error(err.message);
        }
    }

    useEffect(() => {
        getStaffID();
    });

    function handleSignOut(event) {
        setUser({});
        setIsSignedIn(false);
        setStaff('');
        // document.getElementById("signInDiv").hidden = false;
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleLogin = async () => {
        // await getStaffID();
        // setIsSignedIn(true);
        // console.log("SIGNED IN: " + isSignedIn);
        console.log("THIS IS STAFFID: " + staff);
        var result = '';
        if (staff != null) {
            result = checkStaff(staff);
        } else {
            result = checkStaff(inputValue);
        }
        
        console.log("THIS IS STAFF: " + result);
        if (result === 'manager') {
            navigate('/redirect');
            setIsSignedIn(true);
        } else if (result === 'cashier') {
            navigate('/cashier');
            setIsSignedIn(true);
        } else {
            navigate('/menu');
            setIsSignedIn(true);
            // ...
        }
    };

    const checkStaff = (id) => {
        if (id < 10) {
          return "cashier";
        } else if (id >= 10 && id < 20) {
          return 'manager';
        } else if (id >= 20) {
          return "customer";
        }
    };

    useEffect(() => {
        /* global google */
        setIsSignedIn(true);
        google.accounts.id.initialize({
            client_id: "659412670449-bqubbteq6sk1dfk903m8mdh7onu59j4r.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline", size: "large"}
        )

        google.accounts.id.prompt();
    }, [isSignedIn]);

    // If we have no user: sign in button
    // If we have a user: show the log out button

    return (
            <div className='absolute top-[150px] w-full h-[calc(100%-150px)] flex justify-center'>
                <div className="-translate-y-[150px] flex flex-col justify-center items-center p-4">
                    <h1 className='font-bold text-4xl text-center m-4'>Log In</h1>
                    {/* <input className="border m-2 p-1 text-center" type="text" value={inputValue} onChange={handleInputChange}/> */}
                    <div className="flex">
                        <button aria-label="Log in" className="border m-2 p-2 rounded-sm" onClick={() => {handleLogin();}}>Log In</button>
                        <button aria-label="Sign Out" className="border m-2 p-2 rounded-sm" onClick={() => {handleSignOut();}}>Sign Out</button>
                        <div id='signInDiv' className="p-2 rounded-sm"></div>
                    </div>
                </div>
                { isSignedIn && 
                    Object.keys(user).length != 0 &&
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>Signed In As {user.name}</p>
                        <img src={user.picture} referrerPolicy="no-referrer"></img>
                    </div>
                }
                {/* { Object.keys(user).length != 0 &&
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <p>Signed In As {user.name}</p>
                        <img src={user.picture} referrerPolicy="no-referrer"></img>
                    </div>
                } */}
                <div className='absolute bottom-0 w-full'>
                    <Footer />
                </div>
            </div>
    )
}

export default Login;