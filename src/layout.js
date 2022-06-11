import React from 'react'
import Footer2 from './Footer2'
import HeaderComponent from './HeaderComponent'


const Layout = ({ children }) => {

    return (
        <>
            <HeaderComponent />
            {children}
            <Footer2 />
        </>
    )
}

export default Layout