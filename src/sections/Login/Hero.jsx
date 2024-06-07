import { useReducer, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IoPhonePortrait } from 'react-icons/io5';
import { MdMail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa6';
import { FcLock, FcOnlineSupport } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setRefreshToken, clearToken, setUser } from '../../redux/api/user/userApiSlice';
import { useLoginUserMutation } from '../../redux/api/apiSlice';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const initialState = {
  username: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setUsername':
      return { ...state, username: action.payload };
    case 'setPassword':
      return { ...state, password: action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

function Hero() {
  const [state, dispatchLocal] = useReducer(reducer, initialState);
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const [loginStatus, setLoginStatus] = useState(null);
  useEffect(() => {
    const storedToken = cookies.get('token');
    const storedUser = localStorage.getItem('user');
  
    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
  
        if (parsedUser && typeof parsedUser === 'object') {
          console.log('Token found in cookies:', storedToken);
          console.log('User found in localStorage:', parsedUser);
          dispatch(setToken(storedToken));
          dispatch(setUser(parsedUser));
          setLoginStatus('success');
        } else {
          console.warn('Parsed user is not a valid object:', parsedUser);
          localStorage.removeItem('user');
          setLoginStatus(null);
        }
  
      } catch (error) {
        console.error('Failed to parse user data from localStorage:', error);
        localStorage.removeItem('user');
        setLoginStatus(null);
      }
    } else {
      if (!storedToken) {
        console.warn('No token found in cookies.');
      }
      if (!storedUser) {
        console.warn('No user found in localStorage.');
      } else {
        console.warn('User in localStorage is invalid.');
      }
      setLoginStatus(null);
    }
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      console.log('Setting token in cookies:', token);
      cookies.set('token', token, { path: '/', expires: new Date(Date.now() + 86400000) });
      setLoginStatus('success');
    } else {
      console.log('Removing token from cookies');
      cookies.remove('token');
      setLoginStatus(null);
    }
  }, [token]);

  const handleLogin = async () => {
    try {
      const { username, password } = state;
      if (!username || !password) throw new Error('Username and password must be provided');
  
      console.log('Attempting to login with username:', username);
  
      const result = await loginUser({ identifier: username, password }).unwrap();
      console.log('API response:', result);
  
      const { access: token, refresh: refreshToken, user } = result;
  
      if (!token || !refreshToken) {
        throw new Error('Token not found in the response');
      }
  
      dispatch(setToken(token));
      dispatch(setRefreshToken(refreshToken));
      dispatch(setUser(user));
      localStorage.setItem('user', JSON.stringify(user));
      setLoginStatus('success');
    } catch (error) {
      console.error('Login error:', error);
      setLoginStatus('error');
    }
  };

  const handleLogOut = () => {
    console.log('Logging out');
    dispatch(clearToken());
    localStorage.removeItem('user');
    setLoginStatus(null);
    dispatchLocal({ type: 'reset' });
  };

  return (
    <>
      {loginStatus === 'success' ? (
        <div className="text-center py-6">
          <h1 className="text-2xl font-semibold">Hi {user?.username || state.username}, welcome to our website!</h1>
          <p className="text-xl">Email: {user?.email}</p>
          <button
            onClick={handleLogOut}
            className="bg-black text-white py-2 px-6 text-xl font-semibold rounded-full mt-4"
          >
            Logout
          </button>
        </div>
      ) : (
        <>
          <Tabs className="bg-[#ecedf4] mt-4">
            <TabList className="flex">
              <Tab>
                <div className="w-42 text-center flex justify-center flex-col sm:flex-row gap-2">
                  <div className="flex flex-col items-center">
                    <IoPhonePortrait className="text-2xl text-center" />
                    <p className="uppercase">Login with Phone</p>
                  </div>
                </div>
              </Tab>
              <Tab>
                <div className="w-42 text-center flex justify-center flex-col sm:flex-row gap-4">
                  <div className="flex flex-col items-center">
                    <MdMail className="text-2xl text-center" />
                    <p className="uppercase">Login with Email</p>
                  </div>
                </div>
              </Tab>
            </TabList>

            <TabPanel>
              <LoginForm state={state} dispatch={dispatchLocal} />
            </TabPanel>

            <TabPanel>
              <LoginForm state={state} dispatch={dispatchLocal} isEmail />
            </TabPanel>
          </Tabs>

          <div className="flex flex-col gap-4 justify-center items-center py-6">
            <button
              onClick={handleLogin}
              className="bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center"
            >
              {loginStatus === 'success' ? 'Logged In' : 'Login'}
            </button>
            <button className="bg-black text-white py-2 px-6 text-xl font-semibold rounded-full w-[350px] text-center">
              Register
            </button>
          </div>

          <div className="flex justify-evenly items-center mt-6 pb-1">
            <InfoBlock icon={<FcLock className="text-xl" />} text="Forget Password" />
            <InfoBlock icon={<FcOnlineSupport className="text-xl" />} text="Support" />
          </div>

          {loginStatus === 'error' && (
            <div className="text-center text-red-600 font-semibold mt-4">
              Failed to login. Please try again.
            </div>
          )}
        </>
      )}
    </>
  );
}

function LoginForm({ state, dispatch, isEmail = false }) {
  return (
    <div className="my-6 px-4">
      <div className="flex flex-col gap-2 my-4">
        <div className="my-4 flex flex-col gap-2">
          <label htmlFor="username" className="flex items-center gap-2 text-xl font-semibold">
            {isEmail ? (
              <>
                <MdMail className="text-xl font-semibold" /> Email
              </>
            ) : (
              <>User Name</>
            )}
          </label>
          <input
            type={isEmail ? 'email' : 'text'}
            id="username"
            value={state.username}
            onChange={(e) => dispatch({ type: 'setUsername', payload: e.target.value })}
            className="bg-white py-2 px-4 rounded-full shadow-lg"
          />
        </div>
        <div className="my-4 flex flex-col gap-2">
          <label htmlFor="password" className="flex items-center gap-2 text-xl font-semibold">
            <FaLock className="text-xl font-semibold" /> Password
          </label>
          <input
            type="password"
            id="password"
            value={state.password}
            onChange={(e) => dispatch({ type: 'setPassword', payload: e.target.value })}
            className="bg-white py-2 px-4 rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

function InfoBlock({ icon, text }) {
  return (
    <div>
      <h1 className="flex items-center gap-2 font-medium text-xl justify-center text-center flex-col uppercase">
        {icon} {text}
      </h1>
    </div>
  );
}

export default Hero;
