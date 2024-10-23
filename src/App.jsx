import React from 'react'
import Customers from './pages/Customers/Customers'
import Pricing from './pages/Pricing/Pricing'
import Product from './pages/Product/Product'
import Resources from './pages/Resources/Resources'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Router>
        
        <Navbar />

        <Routes>
            <Route path='/' element={<Product />}/>
            <Route path='/customers' element={<Customers />}/>
            <Route path='/pricing' element={<Pricing />}/>
            <Route path='/resources' element={<Resources />}/>
        </Routes>


      </Router>
    </div>
  )
}

export default App
