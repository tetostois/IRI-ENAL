// eslint-disable-next-line no-unused-vars
import Reaclct from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import SignIn from './Pages/Connexion/SignIn'
import SignUp from './Pages/Register/SignUp'
import Profile from './Pages/Profile/Profile'
import Dashboard from './Pages/Dashboard/Dashboard'
import Header from './Components/Header/Header'

const App = () => {
  return <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/dashboard' element={<Dashboard />} />

    </Routes>
  </BrowserRouter>
}

export default App


