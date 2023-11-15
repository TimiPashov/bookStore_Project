import './components/App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { UserContext } from './contexts/UserContext'
import { logout } from './services/userService'
import { loginHandler, registerHandler } from './handlers/handlers'


import Catalog from "./components/Catalog"
import Categories from "./components/Categories"
import Details from "./components/Details"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import CreateForm from './components/CreateForm'
import EditForm from './components/EditForm'
import Register from './components/Register'
import Login from './components/Login'




function App() {
  const [user, setUser] = useState();
  const navigate = useNavigate();




  async function onLoginSubmit(e, data) {
    e.preventDefault();
    try {
      const result = await loginHandler(data);
      setUser(result);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  async function onRegisterSubmit(e, data){
    e.preventDefault();
    try{
      const result = await registerHandler(data);
      setUser(result);
      navigate('/')
    }catch(err){
      console.log(err);
    }
  }

  async function onLogout() {
    await logout(user.accessToken);
  }

  return (
    <UserContext.Provider value={{onRegisterSubmit, onLogout, onLoginSubmit, user }}>
      <div id="templatemo_container">
        <Nav />
        <Header />
        <div id="templatemo_content">
          <Categories />
          <Routes>
            <Route path='/' element={<Catalog />} />
            <Route path='/details/:id' element={<Details />} />
            <Route path='/edit/:id' element={<EditForm />} />
            <Route path='/create' element={<CreateForm />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />

          </Routes>

          <div className="cleaner_with_height">&nbsp;</div>
        </div>
        <Footer />
      </div>
    </UserContext.Provider>
  )
}

export default App
