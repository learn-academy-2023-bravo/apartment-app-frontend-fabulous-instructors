import {Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'
import Signup from './components/Signup'
import mockUsers from './mockUsers'
import mockApartments from './mockApartments'
import './App.css'
import MyApartments from './pages/MyApartments'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)  // fake log in so pass in a user to simulate a user logged in.
  const [apartments, setApartments] = useState(mockApartments)
  
   
  return(
    <>
      <Header current_user={currentUser}/>
      <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} />} />
        <Route path="/myapartments" element={<MyApartments apartments={apartments} current_user={currentUser}/>}/>
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit  />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
