import React from 'react'
import { Routes,Route,useNavgate } from 'react-router-dom'
import Login from './components/login'
import Home from './containers/home'
const App = () => {
  return (
    <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path='/*'     element={<Home/>}/>
    </Routes>
  )
}

export default App


