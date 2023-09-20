// import BtnGradient from "../BtnGradient";
import menuBtn from "../../assets/menu.png";
import menuBtnClose from "../../assets/menuClose.png";
import { useState } from "react";
import getlink from "../../assets/getlinked.svg";
import { NavLink } from "react-router-dom";
// import Logo from "../Logo";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="nav_container">
      <nav className="nav_con">
        {/* logo text */}
        <img src={getlink} className="logo" alt="" />
        {/* or */}
        {/* <Logo /> */}
        <ul className={isNavOpen ? "open" : ""}>
          <a href="/#timeline">Timeline</a>
          <a href="/#overview">Overview</a>
          <a href="/#faq">FAQs</a>
          <NavLink to={"contact"}>Contact</NavLink>
          <NavLink to={"register"} className="register_btn btn">
            Register
          </NavLink>
          {/* <BtnGradient className="register_btn" label="Register" /> */}
        </ul>
        <img
          onClick={() => setIsNavOpen(!isNavOpen)}
          src={isNavOpen ? menuBtnClose : menuBtn}
          alt=""
          className={"menu"}
        />
      </nav>
    </div>
  );
};

export default Navbar;
