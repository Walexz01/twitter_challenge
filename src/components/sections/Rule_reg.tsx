import rule_reg_img from "../../assets/rule_reg_img.png";
import ColorHeader from "../ColorHeader";
import purple_bg from "../../assets/Purple-Lens-Flare-PNG.png";
const Rule_reg = () => {
  return (
    <section>
      <div className="container intro_container">
        <div className="rule_reg_left intro_right">
          <img className="purple_left purple_bg" src={purple_bg} alt="" />

          <ColorHeader
            className="intro_t_c rule_reg_intro"
            text="Rules and"
            colored_text="Guidelines"
          />
          <p>
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
        <div className="rule_reg_right">
          <img src={rule_reg_img} alt="" />
          <img className="purple_left purple_bg" src={purple_bg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Rule_reg;
