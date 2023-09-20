import ColorHeader from "../ColorHeader";
import policies_img from "../../assets/policies.png";
import mark from "../../assets/list terms.png";
import BtnGradient from "../BtnGradient";
import Star3Abso from "../Star3Abso";
import purple_bg from "../../assets/Purple-Lens-Flare-PNG.png";
const Policies = () => {
  return (
    <section>
      <div className="container intro_container policies_container">
        <div className="policies_right intro_right">
          <img className="purple_bg" src={purple_bg} alt="" />
          <Star3Abso />
          <ColorHeader
            className="intro_t_c policies_t_c"
            text="Privacy Policy and"
            colored_text=" Terms"
          />
          <p>Last updated on September 12, 2023</p>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className="policies_card">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <div className="head">
              <h4>Licensing Policy</h4>
              <p>
                <strong>Here are terms of our Standard License:</strong>
              </p>
            </div>
            <div className="policy_list">
              <p className="policy">
                <img src={mark} alt="" />
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </p>
              <p className="policy">
                <img src={mark} alt="" />
                You are licensed to use the item available at any free source
                sites, for your project developement
              </p>
            </div>
            <div className="policy_btn_container">
              <BtnGradient label="Read More" className="policy_btn" />
            </div>
          </div>
        </div>

        <div className="policies_right">
          <img src={policies_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Policies;