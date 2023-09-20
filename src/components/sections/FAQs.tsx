import FAQs_img from "../../assets/FAQs.png";
import { FAQTEXT } from "../../data";
import ColorHeader from "../ColorHeader";
import FAQ from "../FAQ";
const FAQs = () => {
  return (
    <section>
      <div className="container intro_container">
        <div className="FAQs_right intro_right">
          <ColorHeader
            className="intro_t_c rule_reg_intro FAQ_t_c"
            text="Frequently Ask"
            colored_text="Question"
          />
          <p>
            We got answers to the questions that you might want to ask about
            <strong> getlinked Hackathon 1.0</strong>
          </p>
          <div className="faqs">
            {FAQTEXT.map(({ question, answer }, index) => (
              <FAQ key={index} question={question} answer={answer} />
            ))}
          </div>
        </div>
        <div className="FAQs_right">
          <img src={FAQs_img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default FAQs;
