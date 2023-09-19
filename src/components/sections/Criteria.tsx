import criteria_img from "../../assets/criteria.png";
import ColorHeader from "../ColorHeader";
import purple_bg from "../../assets/Purple-Lens-Flare-PNG.png";
import BtnGradient from "../BtnGradient";
import { criteria } from "../../data";

const Criteria = () => {
  return (
    <section>
      <div className="container intro_container">
        <div className="criteria_left">
          <img src={criteria_img} alt="" />
          <img className="purple_bg" src={purple_bg} alt="" />
        </div>
        <div className="criteria_right intro_right">
          <img className=" purple_bg" src={purple_bg} alt="" />
          <ColorHeader
            className="intro_t_c rule_reg_intro"
            text="Judging Criteria"
            colored_text="Key attributes"
          />
          <div className="criterias">
            {criteria.map(({ key, value }, index) => (
              <p className="key_value" key={index}>
                <span className="key">{key}: </span>
                {value}
              </p>
            ))}
            <BtnGradient className="read_more" label="Read More" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Criteria;
