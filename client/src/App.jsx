import React from 'react'
import{BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'

export default function App() {
  return (
    <BrowserRouter >
    <Routes>
    <Route path='/Home' element ={<Home/>}/> 
    <Route path='/About' element ={<About/>}/> 
    <Route path='/Signin' element ={<Signin/>}/> 
    <Route path='/Signup' element ={<Signup/>}/> 
    <Route path='/dashboard' element ={<Dashboard/>}/> 
    <Route path='/project' element ={<Project/>}/> 

    </Routes>
     
    </BrowserRouter>
  )
}
