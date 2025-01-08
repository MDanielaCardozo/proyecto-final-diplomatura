import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/layout/Navigation'
import Home from './components/views/Home/Home'
import ProductDetails from './components/views/Product/ProductDetails'
import About from './components/views/About/About'
import Contact from './components/views/Contact/Contact'
import Error404 from './components/views/Error/Error404'

function App() {
 
  return (
   <Router>
    <Navigation/>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
   </Router>
  )
}

export default App
