import { useState } from "react";
import plus from "../assets/+.png";
import minus from "../assets/-.png";
interface Props {
  question: string;
  answer: string;
}
const Faq = ({ question, answer }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="faq">
      <h3 onClick={() => setIsVisible(!isVisible)}>
        {question}
        <img src={isVisible ? minus : plus} alt="" />
      </h3>
      {isVisible && <p>{answer} </p>}
    </div>
  );
};

export default Faq;
