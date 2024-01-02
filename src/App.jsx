import React from 'react'

import Navbar from './view/navbar/Navbar'
import Footer from './view/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
// import { init } from 'console-ban'



// init({
//   // Rewrite the <body></body> as a string
//   write: '<h1> Stop </h1>',
//   redirect: "Salom"

// })
const App = () => {

  return (
    <React.Fragment>
      <Navbar/>
      <main>
        <Routes>
          <Route index element={<Home/>} />
        </Routes>
      </main>
      <Footer/>
    </React.Fragment>
  )
}

export default App