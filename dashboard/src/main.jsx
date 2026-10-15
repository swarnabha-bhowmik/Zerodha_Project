import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Holdings from './pages/Holdings'
import Positions from './pages/Positions'
import Funds from './pages/Funds'
import Orders from './pages/Orders'
import Profile from './pages/Profile'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path = "/" element = {<Dashboard />} />
      <Route path = "/orders" element = {<Orders />} />
      <Route path = "/holdings" element = {<Holdings />} />
      <Route path = "/positions" element = {<Positions />} />
      <Route path = "/funds" element = {<Funds />} />
      <Route path = "/profile" element = {<Profile />} />
    </Routes>
  </BrowserRouter>
)