import BtnGradient from "./BtnGradient";
import modal_img from "../assets/modal_img.png";
interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  action?: string;
  p1?: string;
  p2?: string;
}

const Modal = ({
  isOpen,
  setIsOpen,
  action = "you have successfully Registered!",
  p1 = "Yes, it was easy and you did it!",
  p2 = "check your mail box for next step 😉",
}: Props) => {
  return (
    <div className={isOpen ? "modal" : "modal close"}>
      <div className="container">
        <div className="content">
          <img src={modal_img} alt="" />
          <h3>
            Congratulations
            <br /> {action}
          </h3>
          <p>
            {p1} <br /> {p2}
          </p>
          <BtnGradient
            handleClick={() => setIsOpen(false)}
            label="Back"
            className="submit_contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
