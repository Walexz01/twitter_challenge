import getlink from "../../assets/getlinked.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <section className="no_bottomborder">
      <div className="container">
        <div className="footer_container">
          <div className="col1">
            <div className="top list">
              <img src={getlink} className="logo" alt="" />
              <p>
                Getlinked Tech Hackathon is a technology innovation program
                established by a group of organizations with the aim of
                showcasing young and talented individuals in the field of
                technology
              </p>
            </div>
            <div className="bottom">
              <p className="terms">Terms of Use</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="col2">
            <div className="list">
              <h4>Useful Links</h4>
              <p>Overview</p>
              <p>Timeline</p>
              <p>FAQs</p>
              <p>Register</p>
              <div className="follow_us">
                <h4>Follow us</h4>
                <BsInstagram />
                <FaXTwitter />
                <FaFacebookF />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="col3">
            <div className="list">
              <h4>Contact Us</h4>
              <p className="contact_detail">
                <BiSolidPhoneCall /> +234 679 81819
              </p>
              <p className="contact_detail">
                <FaLocationDot /> 27,Alara Street Yaba 100012 Lagos State
              </p>
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
