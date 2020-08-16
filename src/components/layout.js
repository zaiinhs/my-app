import React from 'react'
import Header from './header'
import Footer from './footer'
import '../pages/style.css'

const LayoutPage = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default LayoutPage