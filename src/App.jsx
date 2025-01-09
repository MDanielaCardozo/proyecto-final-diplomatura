import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navigation from './components/layout/Navigation'
import Home from './components/views/Home/Home'
import ProductDetails from './components/views/Product/ProductDetails'
import About from './components/views/About/About'
import Contact from './components/views/Contact/Contact'
import Register from './components/views/Register'
import Login from './components/views/Login'
import Error404 from './components/views/Error/Error404'

function App() {

  // const [products, setProducts] = useState();
  const [logged, setLogged] = useState({});
 
  return (
   <Router>
    <Navigation logged={logged} setLogged={setLogged}/>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/productDetail/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/auth/register" element={<Register setLogged={ setLogged }/>} />
        <Route path="/auth/login" element={<Login setLogged={ setLogged }/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
   </Router>
  )
}

export default App
