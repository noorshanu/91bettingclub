import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const LogOut = () => {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const handleLogout = () => {
      console.log('Logging out');
      dispatch(logout());
      history.push('/login');
    };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Logout</h2>
      <button
        onClick={handleLogout}
        className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  </div>
  )
}

export default LogOut