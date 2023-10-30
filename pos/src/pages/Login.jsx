// import React, { useState } from "react";
// import "../styles/Login.css";
// import { GoogleLogin } from 'react-google-login';

// const clientId = "659412670449-bqubbteq6sk1dfk903m8mdh7onu59j4r.apps.googleusercontent.com";

// function Login() {

//     const onSuccess = (res) => {
//         console.log("Login Success. Current user: ", res.profileObj);
//     }
//     const onFailure = (res) => {
//         console.log("Login Failed. res: ", res);
//     }

//     return (
//         <div id="signInButton">
//             <GoogleLogin
//                 clientId={clientId}
//                 buttonText="Login"
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}
//                 cookiePolicy={'single-host-origin'}
//                 isSignedIn={true}
//             />
//         </div>
//     )
// }

// // export const Login = () => {
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
// // }

// export default Login