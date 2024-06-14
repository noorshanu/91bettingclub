import React from 'react'
import Header from '../sections/AccountSection/Header'
import TotalBalnce from '../sections/AccountSection/TotalBalnce'
import ServiceCenter from '../sections/AccountSection/ServiceCenter'
import Footer from '../sections/Footer'
import GameHistory from '../sections/AccountSection/GameHistory'
import { useDispatch } from 'react-redux';
import {useAuth} from '../AuthContext'

function Account() {
  const dispatch = useDispatch();
  const { logout } = useAuth();
  const handleLogOut = () => {
    logout();
    dispatch({ type: 'reset' });
    // Assuming setLoginStatus is a state updater, which is not provided in the context
    // setLoginStatus(null);
    console.log('User logged out');
  };
  return (
    <div className='mx-auto max-w-md bg-[#f2f2f1] h-[100%] pb-20 '>
      <div>
        <Header/>
      </div>
      <div>
        <TotalBalnce/>
      </div>
      <div className=' my-6'>
        <GameHistory/>

      </div>
      <div>
        <ServiceCenter/>
      </div>
      <div className=' mx-auto flex justify-center'>
      <button
            onClick={handleLogOut}
            className="bg-black text-white py-2 px-6 text-xl font-semibold rounded-full mt-4"
          >
            Logout
          </button>
      </div>

      <div>
        <Footer/>
      </div>
      </div>
  )
}

export default Account