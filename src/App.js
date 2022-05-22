import logo from './logo.svg';
import './App.css';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import UserPage from './Components/UserPage/UserPage'
import Checkout from './Components/checkout/Checkout';
import ThankyouScreen from './Components/ThankyouScreen/ThankyouScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/UserPage/UserPage" element={<UserPage />} />
      {/* <Route path="/cart/CartPage" element={<CartPage />} /> */}
      <Route path="/checkout/Checkout" element={<Checkout />}/>
      <Route path="/ThankyouScreen/ThankyouScreen" element={<ThankyouScreen />}/>
    </Routes>
  
        {/* <Register /> */}
    </div>
  );
}

export default App;
