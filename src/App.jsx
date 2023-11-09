import { useState } from 'react';
import { onDetailsClick } from './handlers/handlers';
import { Route, Routes } from 'react-router-dom'

import Catalog from "./components/Catalog"
import Categories from "./components/Categories"
import Details from "./components/Details"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"





function App() {
  const [isDetails, setIsDetails] = useState(false);

  return (
    <div id="templatemo_container">
      <Nav />
      <Header />
      <div id="templatemo_content">
        <Categories />
        <Routes>
          <Route path='/' element={<Catalog onDetailsClick={() => onDetailsClick(isDetails, setIsDetails)} />} />
          <Route path='/details' element={<Details />} />
        </Routes>


        {/* {isDetails ? <Details onDetailsClick={() => onDetailsClick(isDetails, setIsDetails)} /> : <Catalog onDetailsClick={() => onDetailsClick(isDetails, setIsDetails)} />} */}


        <div className="cleaner_with_height">&nbsp;</div>
      </div>
      <Footer />
    </div>
  )
}

export default App
