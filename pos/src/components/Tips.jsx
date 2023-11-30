import React from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

function Tips({ onClose }) {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8' onClick={onClose}>
        <div className='relative bg-[#F3ECD4] rounded-lg h-2/3 w-[500px] p-12' onClick={e => e.stopPropagation()}>
        <button onClick={() => { onClose();}} className='bg-white absolute top-2 right-3 m-2 rounded-full p-2'><CloseOutlinedIcon/></button>
            <div className='flex flex-col justify-center'>
                <h1 className='text-center font-bold text-3xl p-6'>Tip Amount</h1>
                <input className='mx-auto w-1/2 p-1 text-center' type="text" />
            </div>
            <div className='flex flex-col justify-center mt-10'>
                <h1 className='text-center font-bold text-2xl p-4'>Payment Method</h1>
                <div className='flex justify-center'>
                    <button className='p-2 border border-black rounded-lg mx-4 mb-4'>Cash</button>
                    <button className='p-2 border border-black rounded-lg mx-4 mb-4'>Card</button>
                </div>
            </div>
            <div className='flex justify-center m-10'>
                <button className='p-2 border border-black rounded-lg'>Confirm</button>
            </div>
        </div>
    </div>
  )
}

export default Tips