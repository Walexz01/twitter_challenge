// import BtnGradient from "../BtnGradient";
import menuBtn from "../../assets/menu.png";
import menuBtnClose from "../../assets/menuClose.png";
import React, { useState } from "react";
import getlink from "../../assets/getlinked.svg";
import { Link, NavLink } from "react-router-dom";
import { Links } from "../../data";
// import Logo from "../Logo";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="nav_container">
      <nav className="nav_con">
        {/* logo text */}
        <Link to={"/"}>
          <img src={getlink} className="logo" alt="" />
        </Link>
        {/* or */}
        {/* <Logo /> */}
        <ul className={isNavOpen ? "open" : ""}>
          {Links.map(
            ({ label, className = "", href, to = "", type }, index) => (
              <React.Fragment key={index}>
                {type === "nalink" ? (
                  <NavLink
                    onClick={() => setIsNavOpen(false)}
                    to={to}
                    className={className}
                  >
                    {label}
                  </NavLink>
                ) : (
                  <a
                    onClick={() => setIsNavOpen(false)}
                    href={href}
                    className={className}
                  >
                    {label}
                  </a>
                )}
              </React.Fragment>
            )
          )}
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
