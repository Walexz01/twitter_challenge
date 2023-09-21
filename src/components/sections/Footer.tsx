import getlink from "../../assets/getlinked.svg";

import Social from "../Social";
import { Link, NavLink } from "react-router-dom";
import { Links, contacts } from "../../data";
import React from "react";
import Star3Abso from "../Star3Abso";

const Footer = () => {
  return (
    <section className="no_bottomborder">
      <div className="container">
        <Star3Abso />
        <div className="footer_container">
          <div className="col1">
            <div className="top list">
              <Link to={"/"}>
                <img src={getlink} className="logo" alt="" />
              </Link>
              <p>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <div className="bottom">
              <a href="/#privacy_policy">
                <p className="terms">Terms of Use</p>
              </a>
              <a href="/#privacy_policy">
                <p>Privacy Policy</p>
              </a>
            </div>
          </div>
          <div className="col2">
            <div className="list">
              <h4>Useful Links</h4>
              {Links.map(({ label, href, to = "", type }, index) => (
                <React.Fragment key={index}>
                  {type === "nalink" ? (
                    <NavLink to={to}>{label}</NavLink>
                  ) : (
                    <a href={href}>{label}</a>
                  )}
                </React.Fragment>
              ))}
              <div className="follow_us">
                <h4>Follow us</h4>
                <Social />
              </div>
            </div>
          </div>
          <div className="col3">
            <div className="list">
              <h4>Contact Us</h4>
              {contacts.map(({ Icon, href, label }, index) => (
                <a
                  key={index}
                  target="_blank"
                  href={href}
                  className="contact_detail"
                >
                  <Icon /> {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>All rights reserved. © getlinked Ltd.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
