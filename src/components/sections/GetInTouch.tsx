import BtnGradient from "../BtnGradient";
import ColorHeader from "../ColorHeader";
import Social from "../Social";
import purple_bg from "../../assets/Purple-Lens-Flare-PNG.png";
import Star3Abso from "../Star3Abso";

const GetInTouch = () => {
  return (
    <section>
      <div className="container GetInTouch_container ">
        <div className="GetInTouch_left">
          <img className="purple_bg purple_first" src={purple_bg} alt="" />

          <ColorHeader
            className="intro_t_c GetInTouch_t_c"
            colored_text="Get in touch"
          />
          <div className="contact_info">
            <p>Contact Information</p>
            <p>27,Alara Street Yaba 100012 Lagos State</p>
            <p>Call Us : 07067981819</p>
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
            <form action="">
              <input type="text" placeholder="First Name" />
              <input type="email" placeholder="Mail" />
              <input type="text" placeholder="Phone Number" />
              <textarea
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
