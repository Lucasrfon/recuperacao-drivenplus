import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import TokenContext from './Contexts/TokenContext';
import './Components/reset.css';
import './Components/globalStyle.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Subscriptions from './Pages/Subscriptions';
import Subscription from './Pages/Subscription';
import Home from './Pages/Home';

export default function App () {
    const [token, setToken] = useState("");
    
    return (
        <BrowserRouter>
            <TokenContext.Provider value={{ token, setToken }}>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/subscriptions/:idSubscription" element={<Subscription />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </TokenContext.Provider>
        </BrowserRouter>
    )
}