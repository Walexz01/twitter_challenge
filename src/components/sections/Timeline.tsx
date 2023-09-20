import ColorHeader from "../ColorHeader";
import TimelineList from "../TimelineList";
import Star3Abso from "../Star3Abso";

const Timeline = () => {
  return (
    <section id="timeline">
      <div className="container timeline_container">
        <div className="timeline_header">
          <ColorHeader className="timeline_heading" text="Timeline" />
          <p>
            Here is the breakdown of the time we anticipate using for the
            upcoming event.
          </p>
        </div>
        <Star3Abso />
        <TimelineList />
      </div>
    </section>
  );
};

export default Timeline;
