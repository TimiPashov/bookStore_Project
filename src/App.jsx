import { Route, Routes, } from 'react-router-dom'
import { AuthProvider } from './contexts/UserContext'

import Catalog from "./components/Catalog/Catalog"
import Categories from "./components/Categories/Categories"
import Details from "./components/Details/Details"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import CreateForm from './components/CreateForm/CreateForm'
import EditForm from './components/EditForm/EditForm'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

import styles from './App.module.css'
import { RouteGuard } from './components/common/RouteGuard'

function App() {

  return (
    <div className={styles.bodyClass}>
      <div className={styles.templatemo_container}>
        <AuthProvider>
          <div id="templatemo_container" className={styles.templatemo_container}>
            <Nav />
            <Header />
            <div id="templatemo_content" className={styles.templatemo_content}>
              <Categories />
              <Routes>
                <Route path='/' element={<Catalog />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/edit/:id' element={<EditForm />} />
                <Route element={<RouteGuard />} >
                  <Route path='/create' element={<CreateForm />} />
                </Route>
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/adventure' element={<Catalog />} />
              </Routes>
              <div className={styles.cleaner_with_height}>&nbsp;</div>
            </div>
            <Footer />
          </div>
        </AuthProvider>
      </div>
    </div>
  )
}

export default App
