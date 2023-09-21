import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TimeLines } from "../data";

const TimelineList = () => {
  return (
    <div className="timeline_container">
      <VerticalTimeline
        lineColor="#D434FE"
        //   animate={false}
      >
        {TimeLines.map(({ heading, date, text }, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "transparent",
              color: "#fff",
              boxShadow: "0 0 0 4px transparent",
            }}
            contentArrowStyle={{ borderRight: "7px solid  transparent" }}
            date={date}
            dateClassName="timeline_date"
            iconStyle={{
              background:
                "linear-gradient(90deg,var(--color-secondary2),var(--color-secondary4))",

              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              fontWeight: "bolder",
              boxShadow: "0 0 0 10px #150e28",
            }}
            icon={<span>{index + 1}</span>}
          >
            <div className="time_content">
              <h3 className="vertical-timeline-element-title timeline_title">
                {heading}
              </h3>
              <p>{text} </p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimelineList;
