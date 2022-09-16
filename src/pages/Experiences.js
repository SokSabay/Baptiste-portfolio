import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experiences.css"

function Experiences() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="hsl(173, 58%, 39%)">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "hsl(197, 37%, 24%)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">OpenClassRooms</h3>
          <p>Développeur WEB</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          iconStyle={{ background: "hsl(197, 37%, 24%)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">42</h3>
          <p>Apprentissage du C</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016-2020"
          iconStyle={{ background: "hsl(12, 76%, 61%)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Magic Makers</h3>
          <p>Animateur en coneption Créative & Responsable d'équipe</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2022"
          iconStyle={{ background: "hsl(12, 76%, 61%)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">42</h3>
          <p>Apprentissage du C</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experiences;
