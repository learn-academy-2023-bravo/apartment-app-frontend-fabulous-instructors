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
import mockUsers from './mockUsers'
import mockApartments from './mockApartments'
import './App.css'

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [apartments, setApartments] = useState(mockApartments)
   
  return(
    <>
      <Header />
      <div className="wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments}/>} />
        <Route path="/apartmentshow/:id" element={<ApartmentShow  />} />
        <Route path="/apartmentnew" element={<ApartmentNew />} />
        <Route path="/apartmentedit/:id" element={<ApartmentEdit  />} />
        <Route path="/myapartments" element={<MyApartments />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
