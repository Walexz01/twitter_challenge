import ColorHeader from "../ColorHeader";
import reward_img from "../../assets/reward.png";
import { Positions } from "../../data";
import purple_bg from "../../assets/Purple-Lens-Flare-PNG.png";
import Star3Abso from "../Star3Abso";

const Reward = () => {
  return (
    <section className="reward_section">
      <div className="container reward_container">
        <div className="reward_header">
          <ColorHeader
            className="reward_heading"
            text="Prizes and"
            colored_text="Rewards"
          />
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <div className="reward_bottom intro_container">
          <div className="reward_left">
            <Star3Abso />
            <img className="purple_bg" src={purple_bg} alt="" />
            <img src={reward_img} alt="" />
          </div>
          <div className="reward_right reward_cards">
            <Star3Abso />
            <img className="purple_bg" src={purple_bg} alt="" />
            {Positions.map(({ badge, pos, position, price }) => (
              <div
                className={pos === 1 ? "reward_card first_pos" : "reward_card"}
                key={pos}
              >
                <img src={badge} alt="" />
                <div className="content">
                  <h3 className="position">{position}</h3>
                  <span>Runner</span>
                  <h3 className="price">{price}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reward;
