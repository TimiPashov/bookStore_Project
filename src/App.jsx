
import { Route, Routes } from 'react-router-dom'

import Catalog from "./components/Catalog"
import Categories from "./components/Categories"
import Details from "./components/Details"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import CreateForm from './components/CreateForm'





function App() {


  return (
    <div id="templatemo_container">
      <Nav />
      <Header />
      <div id="templatemo_content">
        <Categories />
        <Routes>
          <Route path='/' element={<Catalog />} />
          <Route path='/details/:id' element={<Details />} />
          <Route path='/create' element={<CreateForm />} />
        </Routes>

        <div className="cleaner_with_height">&nbsp;</div>
      </div>
      <Footer />
    </div>
  )
}

export default App
