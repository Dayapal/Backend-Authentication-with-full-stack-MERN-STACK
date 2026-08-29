import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import FetchColdrinks from './components/FetchColdrinks'
import MobileFetch from './components/MobileFetch'
import CreateMobile from './components/CreateMobile'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import ProctedRoute from './components/ProtectedRoute'
const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/'element={<Navigate to="/login" />}/>
        <Route path='/register'element={<Register />}/>
        <Route path="/login" element={<Login />} />
        <Route
          path='/dashboard'
          element={
            <ProctedRoute>
              <Dashboard />
            </ProctedRoute> }/>

        <Route
          path='/mobiles'element={
            <ProctedRoute>
              <MobileFetch />
            </ProctedRoute> }/>

        <Route
          path='/create-mobile'
          element={
            <ProctedRoute>
              <CreateMobile />
            </ProctedRoute>
          }
        />
        <Route
          path='/fetch-coldrinks'
          element={
            <ProctedRoute>
             <FetchColdrinks/>
            </ProctedRoute>
          }
        />

      </Routes>
    </BrowserRouter>


  )
}

export default App
