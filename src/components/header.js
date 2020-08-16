import React from 'react'
import { Link } from 'gatsby'

const HeaderPage = () => {
    return (
        <>
            <header>
                <h1>Hi, There.</h1>
                <h2>namaku Zainal Abidin</h2>
                <h4>Daftar Halaman :</h4>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="../about">About</Link>
                </li>
                <li>
                    <Link to="../blog">Blog</Link>
                </li>
                <li>
                    <Link to="../contact">Contact</Link>
                </li>
            </header>
        </>
    )
}
export default HeaderPage