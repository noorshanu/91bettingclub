import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import WinGo from "./sections/Games/WinGo";

function App() {


  return (
    <>
           <Router> {/* Wrap your entire application with the Router component */}
      <Routes>
        {/* English Routes */}
      
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/wingo" element={<WinGo/>} />

     
        
  
     
      </Routes>
    </Router>
    </>
  )
}

export default App
