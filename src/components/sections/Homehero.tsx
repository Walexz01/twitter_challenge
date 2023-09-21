import man from "../../assets/man-wearing-smart-glasses-touching-virtual-screen 1 (1).png";
import bubble from "../../assets/Image 1.png";
import { heroSvg, hero_left_imgs, herorightImg } from "../../data";
import CountDown from "../CountDown";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
const Homehero = () => {
  return (
    <header>
      <section className="hero_section">
        <div className="container ">
          <div className="up">
            {/* <div className=""> */}
            <Typewriter
              options={{
                strings: ["Igniting a Revolution in HR Innovation", ""],
                autoStart: true,
                loop: true,
                delay: 100,
                wrapperClassName: "text_under",
              }}
            />
            {/* </div> */}
          </div>
          <div className="hero_container">
            <div className="heroleft">
              {hero_left_imgs.map(({ className, img }, index) => (
                <img key={index} className={className} src={img} alt="" />
              ))}

              <div className="title">
                <h2 className="title1">getlinked Tech</h2>
                <h2 className="text_colored hero_t_c">
                  Hackathon <span>1.0</span>
                  {heroSvg.map(({ className, img }, index) => (
                    <img key={index} className={className} src={img} alt="" />
                  ))}
                </h2>
              </div>
              <p className="short_intro">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <Link to={"register"} className="hero_btn btn register_btn">
                Register
              </Link>
              <CountDown />
            </div>
            <div className="heroright">
              {herorightImg.map(({ className, img }, index) => (
                <img key={index} className={className} src={img} alt="" />
              ))}
              <div className="hero_imgs">
                <img className="hero_img" src={man} alt="" />
                <img className="hero_img_bubble" src={bubble} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Homehero;
