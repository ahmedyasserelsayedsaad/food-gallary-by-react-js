import React from 'react'
import Router from '../routes/router'
import Header from './header'
import Footer from './footer'
function Layout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Router />
      </div>
      <div>
       <Footer/>
      </div>
    </div>
  )
}

export default Layout