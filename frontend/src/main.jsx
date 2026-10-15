import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home from './pages/home_page/Home'
import Signup from './pages/signup_page/Signup'
import Login from './pages/login_page/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import About from './pages/about_page/About'
import Product from './pages/product_page/Product'
import Pricing from './pages/pricing_page/Pricing'
import Support from './pages/support_page/Support'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/products" element = {<Product />} />
          <Route path = "/pricing" element = {<Pricing />} />
          <Route path = "/support" element = {<Support />} />
          <Route path = "*" element = {<NotFound />} />
      </Routes>
      <Footer />
  </BrowserRouter>
)