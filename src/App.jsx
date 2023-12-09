import { Route, Routes, } from 'react-router-dom'
import { AuthProvider } from './contexts/UserContext'
import { RouteGuard } from './components/common/RouteGuard'
import { BookProvider } from './contexts/BookContext'
import { LoggedInGuard } from './components/common/LoggedInGuard'


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
import Search from './components/Search/Search'
import { User } from './components/User/User'
function App() {

  return (
    <div className={styles.bodyClass}>
      <div className={styles.templatemo_container}>
        <AuthProvider>
          <BookProvider>
            <div id="templatemo_container" className={styles.templatemo_container}>
              <Nav />
              <Header />
              <div id="templatemo_content" className={styles.templatemo_content}>
                <Categories />
                <Routes>
                  <Route path='/' element={<Catalog />} />
                  <Route path='/search/:query' element={<Search />} />
                  <Route path='/search' element={<Search />} />
                  <Route path='/details/:id' element={<Details />} />
                  <Route element={<RouteGuard />} >
                    <Route path='/edit/:id' element={<EditForm />} />
                    <Route path='/create' element={<CreateForm />} />
                    <Route path='/user' element={<User />} />
                  </Route>
                  <Route element={<LoggedInGuard />} >
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                  </Route>
                  <Route path='/adventure' element={<Catalog />} />
                </Routes>
                <div className={styles.cleaner_with_height}>&nbsp;</div>
              </div>
              <Footer />
            </div>
          </BookProvider>
        </AuthProvider>
      </div>
    </div>
  )
}

export default App
