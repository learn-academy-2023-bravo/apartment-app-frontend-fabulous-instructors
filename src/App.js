import {Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import MyApartments from './pages/MyApartments'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import SignUp from './components/Signup'
import Login from './components/Login'
import mockUsers from './mockUsers'
import mockApartments from './mockApartments'


import './App.css'

const App = () => {

  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)

  const login = () => {
    console.log('login pressed: ', currentUser)
  
  }

  const logout = () => {
  
    console.log('logout', currentUser)
  }

  return(
    <>
      <Header current_user={currentUser} setCurrentUser={setCurrentUser}/>
      <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} current_user={currentUser}/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow apartments={apartments} current_user={currentUser}/>} />
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="/apartmentedit" element={<ApartmentEdit />} />
        <Route path="/myapartments" element={<MyApartments current_user={currentUser} apartments={mockApartments}/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
