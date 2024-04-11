import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import WinGo from "./sections/Games/WinGo";
import Activity from "./Pages/Activity";
import Promotion from "./Pages/Promotion";
import Wallet from "./Pages/Wallet";
import Account from "./Pages/Account";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/wingo" element={<WinGo />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/main" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
