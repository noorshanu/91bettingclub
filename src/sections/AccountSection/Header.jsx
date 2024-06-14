import React from 'react';
import { useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';

function Header() {
  const user = useSelector((state) => state.user.user); // Assuming user data is stored here
  const goBack = () => {
    window.history.back();
  };

  return (
    <section>
      <div className="bg-[#212121] mx-auto h-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <button onClick={goBack}>
            <IoIosArrowBack className="text-white text-2xl" />
          </button>
          <div>
            <a href="/">
              <img src="images/logo.png" alt="Logo" className="h-[40px] mx-auto" />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          {user ? (
            <>
              <h2 className="text-white text-lg">{user}</h2>
              <span className="text-gray-400 text-sm">{user.email}</span>
            </>
          ) : (
            <a href="/login" className="text-white text-lg">Please login</a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Header;
