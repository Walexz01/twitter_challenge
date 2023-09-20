import intro_img from "../../assets/intro-img.png";
import ColorHeader from "../ColorHeader";
const Intro = () => {
  return (
    <section id="overview">
      <div className="container intro_container">
        <div className="intro_left">
          <img src={intro_img} alt="" />
        </div>
        <div className="intro_right">
          <ColorHeader
            className="intro_t_c"
            text="Introduction to getlinked "
            colored_text="tech Hackathon 1.0"
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
      </div>
    </section>
  );
};

export default Intro;
