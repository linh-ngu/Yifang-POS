import React, { useState } from "react";
import { useEffect } from 'react';
import "../styles/Login.css";

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
        <div>
            <div id="signInDiv">

            </div>
        </div>
    )
}

// export const Login = () => {
// //     const [staffid, setStaffID] = useState('');

// //     const handleSubmit = (e) => {
// //         // preventDefault makes sure form cannot be submitted without correct login info
// //         e.preventDefault();
// //         console.log(staffid);
// //     }

// //     return (
// //         <div className="auth-form-container">
// //             <form className="login-form" onSubmit={handleSubmit}>
// //                 <label htmlFor="staffid">Staff ID</label>
// //                 <input 
// //                     value={staffid} 
// //                     onChange={(e) => setStaffID(e.target.value)} 
// //                     type="text" 
// //                     placeholder="Your Staff ID number" 
// //                     id="staffid" 
// //                     name="staffid" />
// //                 <button type="submit">Log In</button>           
// //             </form>
// //         </div>
// //     )
// }

export default Login