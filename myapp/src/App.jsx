import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import Btnnaming from './components/Btnnaming'
import Api from './components/Api'
import Cardadd from './components/Cardadd'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/state" element={<Statebasics />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/Btnnaming" element={<Btnnaming />} />
        <Route path="/api" element={<Api />} />
        <Route path="/Cardadd" element={<Cardadd/>} />
      </Routes>
      
      
      
    
    </>
  )
}

export default App
