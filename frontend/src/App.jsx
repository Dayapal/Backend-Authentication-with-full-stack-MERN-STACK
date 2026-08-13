import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FetchColdrinks from './components/FetchColdrinks'
import MobileFetch from './components/MobileFetch'
import CreateMobile from './components/CreateMobile'
import Register from './pages/Register'
import Login from './pages/Login'
const App = () => {
  return (

    <BrowserRouter>

      {/* <FetchColdrinks/> */}
      {/* <CreateMobile />
      <MobileFetch /> */}
      {/* <Register /> */}
      {/* <Login /> */}

      <Routes>
        {/* // public route */}

        <Route path='/'
          element={<Navigate to="/login" />}
        />
        

      </Routes>





    </BrowserRouter>


  )
}

export default App
