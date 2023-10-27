import React, { useState } from "react";

export const Login = () => {
    const [staffid, setStaffID] = useState('');

    const handleSubmit = (e) => {
        // preventDefault makes sure form cannot be submitted without correct login info
        e.preventDefault();
        console.log(staffid);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form"onSubmit={handleSubmit}>
                <label htmlFor="staffid">Staff ID</label>
                <input 
                    value={staffid} 
                    onChange={(e) => setStaffID(e.target.value)} 
                    type="text" 
                    placeholder="Your Staff ID number" 
                    id="staffid" 
                    name="staffid" />
                <button
                    type="submit">Log In
                </button>           
            </form>
        </div>
    )
}