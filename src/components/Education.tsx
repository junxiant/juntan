import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2024 – Apr 2025"
            iconStyle={{ background: '#0083ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Master of Science, Artificial Intelligence</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Texas, Austin</h4>
            <p>Graduate studies specializing in Artificial Intelligence, Machine Learning, and Deep Learning.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Aug 2019 – Dec 2022"
            iconStyle={{ background: '#0083ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Engineering, Computer Science (AI)</h3>
            <h4 className="vertical-timeline-element-subtitle">Nanyang Technological University, Singapore</h4>
            <p>Undergraduate degree in Computer Science with specialization in Artificial Intelligence.</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Apr 2014 – May 2017"
            iconStyle={{ background: '#0083ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Diploma in Computer Engineering (Robotics) & Diploma Plus in Psychology</h3>
            <h4 className="vertical-timeline-element-subtitle">Temasek Polytechnic, Singapore</h4>
            <p>Completed diploma studies with robotics focus along with psychology program.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
