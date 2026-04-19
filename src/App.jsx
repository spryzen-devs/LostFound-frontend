import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Items from './Components/Items'
import AddItems from './Components/AddItems';
import RoutingPage from './Components/RoutingPage';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={<Items />} />
        <Route path="/add-item" element={<AddItems />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
