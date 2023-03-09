import React from 'react'
import Footer from '../Components/Footer'
import NavBar from '../Components/Navigation'

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout