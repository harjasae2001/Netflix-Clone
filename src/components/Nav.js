import React, { useState, useEffect } from "react";
import "./Nav.css";
import avatar from "../assets/avatar.jpg";
import logo from "../assets/logo-removebg-preview.png";
const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);
  return (
    <div className={`nav && ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="Netflix Logo" />
      <img className="nav__avatar" src={avatar} alt="Netflix Avatar" />
    </div>
  );
};

export default Nav;
