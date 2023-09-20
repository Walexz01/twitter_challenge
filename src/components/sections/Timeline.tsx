import ColorHeader from "../ColorHeader";
import TimelineList from "../TimelineList";
import star from "../../assets/star.png";
import star1 from "../../assets/star pu.png";
import star2 from "../../assets/star (1).png";

const Timeline = () => {
  return (
    <section>
      <div className="container timeline_container">
        <div className="timeline_header">
          <ColorHeader className="timeline_heading" text="Timeline" />
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <img src={star} className="star first_star" alt="" />
        <img src={star1} className="star second_star" alt="" />
        <img src={star2} className="star thrid_star" alt="" />
        <TimelineList />
      </div>
    </section>
  );
};

export default Timeline;
