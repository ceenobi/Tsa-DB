import React from 'react';
import navBranding from "../assets/logo_white_text_new 2.svg";



const Navbar = () => {
  return (
    <>
     <nav className="d-flex justify-content-center ">
        <img src={navBranding} alt="nav-logo" />
      </nav>
    </>
  )
}

export default Navbar