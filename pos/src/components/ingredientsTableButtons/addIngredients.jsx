import React from 'react'

const addIngredients = ({onClose}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8'>
        <div className='relative bg-white rounded-lg h-[500px] w-[500px]'>
            <button onClick={onClose}>Cancel</button>
        </div>
    </div>
  )
}

export default addIngredients