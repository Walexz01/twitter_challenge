import BtnGradient from "../BtnGradient";
import register_img from "../../assets/register.png";
import purple_bg from "../../assets/Purple-Lens-Flare-PNG.png";
import walking from "../../assets/walking.svg";
import Star3Abso from "../Star3Abso";

const RegisterForm = () => {
  return (
    <section>
      <div className="container GetInTouch_container register_container ">
        <div className="GetInTouch_left">
          <img className="purple_bg purple_first" src={purple_bg} alt="" />

          <img src={register_img} alt="" />
        </div>
        <div className="GetInTouch_right register_right">
          <Star3Abso />
          <img className="purple_bg purple_second" src={purple_bg} alt="" />
          <div className="form">
            <h3>Register</h3>
            <p className="movement">
              Be part of this movement! <img src={walking} alt="" />
            </p>
            <p className="create_today">CREATE YOUR ACCOUNT</p>
            <form action="">
              <div className="two_to_1">
                <div className="input_group">
                  <label htmlFor="name">Team’s Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter the name of your group"
                  />
                </div>
                <div className="input_group">
                  <label htmlFor="name">Team’s Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter the name of your group"
                  />
                </div>
              </div>
              <div className="two_to_1">
                <div className="input_group">
                  <label htmlFor="name">Team’s Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter the name of your group"
                  />
                </div>
                <div className="input_group">
                  <label htmlFor="name">Team’s Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter the name of your group"
                  />
                </div>
              </div>
              <div className="two">
                <div className="input_group">
                  <label htmlFor="name">Team’s Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter the name of your group"
                  />
                </div>
                <div className="input_group">
                  <label htmlFor="name">Team’s Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter the name of your group"
                  />
                </div>
              </div>
              <p className="notice">
                Please review your registration details before submitting
              </p>
              <div className="checkbox_con">
                <input
                  className="checkbox"
                  type="checkbox"
                  id="agree"
                  name="agree"
                  value="true"
                />
                <label htmlFor="agree" className="label_check">
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>

              <BtnGradient label="Submit" className="submit_contact" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
