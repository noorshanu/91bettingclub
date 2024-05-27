import React, { useState, useEffect } from 'react';

const BalancePopup = ({name}) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBalance, setSelectedBalance] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(1);

  useEffect(() => {
    calculateTotal();
  }, [selectedBalance, quantity]);

  const handleBalanceChange = (balance) => {
    setSelectedBalance(balance);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const calculateTotal = () => {
    setTotalAmount(selectedBalance * quantity);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={togglePopup}
        className={`text-white px-6 py-3 rounded-3xl font-semibold ${name==="Green" ? "bg-green-600": name==="Violet"? "bg-violet-600": "bg-red-500" }`}
      >
        {name}
      </button>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className={`bg-white p-6 rounded-lg shadow-lg ${name==="Green" ? "bg-green-300": name==="Violet"? "bg-violet-300": "bg-red-300" }`}>
            <h2 className="text-2xl font-bold mb-4">Select Balance and Quantity</h2>
            
            <div className="mb-4">
              <label className="block mb-2">Balance</label>
              <div className="flex space-x-2">
                {[1, 10, 100, 1000].map((balance) => (
                  <button
                    key={balance}
                    onClick={() => handleBalanceChange(balance)}
                    className={`p-2 rounded border ${
                      selectedBalance === balance ? 'bg-blue-500 text-white' : 'bg-gray-200'
                    }`}
                  >
                    {balance}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="border p-2 rounded w-full"
                min="1"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Total Amount</label>
              <p className="p-2 border rounded bg-gray-200">{totalAmount}</p>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                onClick={togglePopup}
                className="bg-red-500 text-white p-2 rounded font-semibold hover:bg-red-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BalancePopup;
