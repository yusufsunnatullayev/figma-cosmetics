import React from "react";
import logo from "../assets/images/logo.svg";
import phone from "../assets/images/phone.png";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import arrowDown from "../assets/images/arrow-down.png";
import flag from "../assets/images/flag.png";

const Navbar = () => {
  return (
    <nav className="w-full py-3 px-[10%] flex items-center justify-between border-b border-darkGreen">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-[60px]">
        <div className="flex items-center justify-center gap-5">
          <img src={phone} alt="phone" />
          <span className="font-medium text-2xl text-lightBlack">
            0 (800) 508-622
          </span>
        </div>
        <div className="flex items-center justify-center gap-6">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
        </div>
        <div className="flex items-center justify-center gap-3">
          <img src={flag} alt="flag" />
          <img src={arrowDown} alt="arrow" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
