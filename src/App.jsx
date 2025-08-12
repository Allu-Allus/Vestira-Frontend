import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import InventoryList from './Pages/InventoryList'
import AddEdit from './Components/AddEdit'
import DeleteProduct from './Components/DeleteProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
     
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/inventorylist' element={<InventoryList/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
