import './components/App.css'
import { Route, Routes, } from 'react-router-dom'
import { AuthProvider } from './contexts/UserContext'

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

  return (
    <AuthProvider>
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
    </AuthProvider>
  )
}

export default App
