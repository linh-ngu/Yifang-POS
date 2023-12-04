import React, { useState } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';

const Tips = ({ onClose, onConfirm }) => {
    // var tips = 0;
    // var method = "N/A"

    const retVals = () =>{
        const processedValues = { tips, method };
        console.log('Processed Values:', processedValues);
        onConfirm(processedValues);
        onClose();
    }

    // const saveTips = (event) =>{
    //     tips = parseFloat(event.target.value);
    // }

    // const saveMethod = (payment_method) => {
    //     method = payment_method;
    // }
    
    const [tips, setTips] = useState(0);
    const saveTips = (event) => {
        setTips(parseFloat(event.target.value));
    }
    const [method, setMethod] = useState('');
    const saveMethod = (payment_method) => {
        setMethod(payment_method);
    }

    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50 p-8' onClick={onClose}>
            <div className='relative bg-[#F3ECD4] rounded-lg overflow-auto h-2/3 w-[500px] p-12' onClick={e => e.stopPropagation()}>
            <button aria-label="Close" onClick={() => { onClose();}} className='bg-white absolute top-2 right-3 m-2 rounded-full p-2'><CloseOutlinedIcon/></button>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-center font-bold text-3xl p-6'>Tip Amount</h1>
                    <input className='border border-black mx-auto w-1/2 p-1 text-center' type="text" onChange={saveTips}/>
                </div>
                <div className='flex flex-col justify-center mt-10'>
                    <h1 className='text-center font-bold text-2xl p-4'>Payment Method</h1>
                    <div className='flex justify-center'>
                        <button aria-label="Cash" className={`p-2 border border-black rounded-lg mx-4 mb-4 ${method === "Cash" ? 'bg-white' : ''}`} onClick={() => saveMethod("Cash")}>Cash</button>
                        <button aria-label="Card" className={`p-2 border border-black rounded-lg mx-4 mb-4 ${method === "Card" ? 'bg-white' : ''}`} onClick={() => saveMethod("Card")}>Card</button>
                    </div>
                </div>
                <div className='flex justify-center m-10'>
                    <button aria-label="Confirm" className='p-2 border border-black rounded-lg' onClick={retVals}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

Tips.propTypes = {
onClose: PropTypes.func.isRequired,
onConfirm: PropTypes.func.isRequired,
};

export default Tips