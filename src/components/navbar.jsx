import React from 'react'
import './styles/navbar.css'

const Navbar = () => {
  return (
    <header className="header">
        <a href="/" className="logo">Logo</a>

        <nav className="navbar">
            <a href="/">home</a>
            <a href="/">about</a>
            <a href="/">hire</a>
        </nav>
    </header>
  )
}

export default Navbar;