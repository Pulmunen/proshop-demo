import React from 'react'
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from "./components/Header"

const App = () => {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
    </>
  )
}

export default App