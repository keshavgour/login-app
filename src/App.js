import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./Context/UserContext";
import Login from './Components/Login';
import Home from './Components/Home';


 function App() 
{
    return(
      <UserProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      </UserProvider>
    )
}

export default App;