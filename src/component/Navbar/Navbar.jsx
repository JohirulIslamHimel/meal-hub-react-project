import React from "react";
import navImg from "../../assets/images.jpg";

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <img src={navImg} alt="" />
        <p>Meal Hub</p>
      </div>
      <div className="nav-right">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Orders</p>
        <p>Blogs</p>
      </div>
    </nav>
  );
};

export default Navbar;
