import BtnGradient from "../BtnGradient";
import register_img from "../../assets/register.png";
import purple_bg from "../../assets/Purple-Lens-Flare-PNG.png";
import walking from "../../assets/walking.svg";
import Star3Abso from "../Star3Abso";
import InputGroup from "../InputGroup";
import { useState } from "react";
import Modal from "../Modal";
import { axiosInstance } from "../../services/api-client";

const RegisterForm = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    phone_number: "",
    team_name: "",
    group_size: 0,
    project_topic: "",
    category: 0,
    privacy_poclicy_accepted: false,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsOpen(false);
      await axiosInstance.post("hackathon/registration", userInput);
      setUserInput({
        email: "",
        phone_number: "",
        team_name: "",
        group_size: 0,
        project_topic: "",
        category: 0,
        privacy_poclicy_accepted: false,
      });
      setIsOpen(true);
    } catch (error) {
      setIsOpen(false);
      console.log(error);
    }
  };
  return (
    <section>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="container GetInTouch_container register_container ">
        <div className="GetInTouch_left">
          <img className="purple_bg purple_first" src={purple_bg} alt="" />
          <h3 className="label_top">Register</h3>
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
            <form onSubmit={handlesubmit}>
              <div className="two_to_1">
                <InputGroup
                  value={userInput.team_name}
                  id="name"
                  handleChange={(e) =>
                    setUserInput({ ...userInput, team_name: e.target.value })
                  }
                  label="Team’s Name"
                  placeholder="Enter the name of your group"
                />
                <InputGroup
                  value={userInput.phone_number}
                  handleChange={(e) =>
                    setUserInput({ ...userInput, phone_number: e.target.value })
                  }
                  id="phone"
                  label="Phone"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="two_to_1">
                <InputGroup
                  value={userInput.email}
                  id="email"
                  handleChange={(e) =>
                    setUserInput({ ...userInput, email: e.target.value })
                  }
                  type="email"
                  label="Email"
                  placeholder="Enter your email address"
                />
                <InputGroup
                  value={userInput.project_topic}
                  handleChange={(e) =>
                    setUserInput({
                      ...userInput,
                      project_topic: e.target.value,
                    })
                  }
                  id="topic"
                  label="Project Topic"
                  placeholder="What is your group project topic"
                />
              </div>
              <div className="two">
                <div className="input_group">
                  <label htmlFor="Category">Category</label>
                  <select
                    value={userInput.category}
                    onChange={(e) =>
                      setUserInput({
                        ...userInput,
                        category: parseInt(e.target.value),
                      })
                    }
                    id="Category"
                    name="Category"
                    required
                  >
                    <option value={0}>Select your category</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </div>
                <div className="input_group">
                  <label htmlFor="size">Group Size</label>
                  <select
                    value={userInput.group_size}
                    onChange={(e) =>
                      setUserInput({
                        ...userInput,
                        group_size: parseInt(e.target.value),
                      })
                    }
                    id="size"
                    name="size"
                    required
                  >
                    <option value={0}>Select</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </div>
              </div>
              <p className="notice">
                Please review your registration details before submitting
              </p>
              <div className="checkbox_con">
                <input
                  required
                  className="checkbox"
                  type="checkbox"
                  id="agree"
                  name="agree"
                  value={userInput.privacy_poclicy_accepted.toString()}
                  onChange={(e) =>
                    setUserInput({
                      ...userInput,
                      privacy_poclicy_accepted: !!e.target.value,
                    })
                  }
                />
                <label htmlFor="agree" className="label_check">
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </div>
              <BtnGradient
                label="Submit"
                className="submit_contact reg_submit"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
