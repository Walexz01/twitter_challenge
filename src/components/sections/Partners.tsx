import ColorHeader from "../ColorHeader";
import sponsors from "../../assets/sponsor.png";
import purple_bg from "../../assets/Purple-Lens-Flare-PNG.png";
import Star3Abso from "../Star3Abso";
const Partners = () => {
  return (
    <section>
      <div className="container partners_container">
        <img className="purple_bg purple_first" src={purple_bg} alt="" />
        <img className="purple_bg purple_second" src={purple_bg} alt="" />
        <Star3Abso />
        <div className="timeline_header partners_header">
          <ColorHeader
            className="partners_header"
            text="Partners and Sponsors"
          />
          <p>
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
        </div>
        <div className="sponsors">
          <img src={sponsors} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
