import React from 'react'

const changePrice = ({onClose}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
      <div className='relative bg-white rounded-lg h-[500px] w-[500px] flex flex-col justify-center items-center'>
        <input className='border border-black p-1 mx-auto my-4' type="text" />
        <div className='flex justify-center'>
          <button className='border border-black rounded-lg p-2 mx-2' onClick={onClose}>Cancel</button>
          <button className='border border-black rounded-lg p-2 mx-2' >Enter</button>
        </div>
      </div>
    </div>
  )
}

export default changePrice