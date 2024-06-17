// import React from 'react'
import {  useState } from "react";
import "./Navbar.scss"
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
   <nav>
    <div className="left">
      <a href="/" className="logo">
        <img src="/logo.png" alt=""/>
        <span>LamaEstate</span>
      </a>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Contact</a>
      <a href="/">Agents</a>
    </div>
    <div className="right">
    <a href="/login">Sign in</a>
            <a href="/register" className="register">
              Sign up
            </a>
    </div>
    <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
   </nav>
  )
}

export default Navbar
