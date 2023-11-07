import React from 'react'
const Customization = ({ item, onClose }) => {
    if (!item) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-5 rounded">
          <h2 className="text-xl font-bold">{item.name}</h2>
          {/* Add your customization fields here */}
          <p>Customize your drink...</p>
          <button onClick={onClose} className="border px-4 py-2 mt-4">Close</button>
        </div>
      </div>
    );
  };

export default Customization