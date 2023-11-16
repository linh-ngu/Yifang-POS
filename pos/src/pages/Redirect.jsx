import React from 'react'
import { useNavigate } from 'react-router-dom'

function Redirect() {

    const navigate = useNavigate();

    return (
        <div className='absolute top-[150px] w-full'>
            <h1 className='font-bold text-4xl text-center'>Redirect Page</h1>
            <div className='flex justify-center items-center p-4'>
                <button className='p-2 border m-2 rounded-sm shadow-sm' onClick={() => navigate('/manager')}>Manager</button>
                <button className='p-2 border m-2 rounded-sm shadow-sm' onClick={() => navigate('/cashier')}>Cashier</button>
            </div>
        </div>
    )
}

export default Redirect