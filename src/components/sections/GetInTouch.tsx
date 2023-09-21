import BtnGradient from "../BtnGradient";
import ColorHeader from "../ColorHeader";
import Social from "../Social";
import purple_bg from "../../assets/Purple-Lens-Flare-PNG.png";
import Star3Abso from "../Star3Abso";
import { useState } from "react";
import { axiosInstance } from "../../services/api-client";
import Modal from "../Modal";

const GetInTouch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [userInput, setUserInput] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: "",
  });
  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsOpen(false);
      await axiosInstance.post("hackathon/contact-form", userInput);
      setUserInput({
        email: "",
        phone_number: "",
        first_name: "",
        message: "",
      });
      setIsOpen(true);
    } catch (error) {
      setIsOpen(false);
      console.log(error);
    }
  };
  return (
    <section>
      <Modal
        action="you have successfully sent a message!"
        p1="Your message has been sent"
        p2="You will hear from us in due course 🤗"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className="container GetInTouch_container ">
        <div className="GetInTouch_left">
          <img className="purple_bg purple_first" src={purple_bg} alt="" />

          <ColorHeader
            className="intro_t_c GetInTouch_t_c"
            colored_text="Get in touch"
          />
          <div className="contact_info">
            <p>Contact Information</p>
            <a href="https://maps.app.goo.gl/rpZhSAXitmunZmvY9">
              <p>27,Alara Street Yaba 100012 Lagos State</p>
            </a>
            <p>
              Call Us : <a href="tel:+2347067981819">07067981819</a>
            </p>
            <p>
              <strong>we are open from Monday-Friday 08:00am - 05:00pm</strong>
            </p>
            <div className="list contact_social_list">
              <h4>Share on</h4>
              <Social />
            </div>
          </div>
        </div>
        <div className="GetInTouch_right">
          <Star3Abso />
          <img className="purple_bg purple_second" src={purple_bg} alt="" />
          <div className="form">
            <h3>Questions or need assistance?</h3>
            <h3>Let us know about it!</h3>
            <form onSubmit={handlesubmit}>
              <input
                required
                value={userInput.first_name}
                type="text"
                onChange={(e) =>
                  setUserInput({ ...userInput, first_name: e.target.value })
                }
                placeholder="First Name"
              />
              <input
                value={userInput.email}
                onChange={(e) =>
                  setUserInput({ ...userInput, email: e.target.value })
                }
                type="email"
                required
                placeholder="Mail"
              />
              <input
                value={userInput.phone_number}
                required
                onChange={(e) =>
                  setUserInput({ ...userInput, phone_number: e.target.value })
                }
                type="text"
                placeholder="Phone Number"
              />
              <textarea
                required
                value={userInput.message}
                onChange={(e) =>
                  setUserInput({ ...userInput, message: e.target.value })
                }
                name="contact_text"
                cols={30}
                rows={10}
                placeholder="Message"
              ></textarea>
              <BtnGradient label="Submit" className="submit_contact" />
              <div className="list contact_social_list list_md">
                <h4>Share on</h4>
                <Social />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
