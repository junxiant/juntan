import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Experience() {
  return (
    <div id="experience">
      <div className="items-container">
        <h1>Career Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2023 – Mar 2026"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI & Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">IOTA MedTech</h4>
            <p>
              Architected full-stack clinical decision support platforms and RAG pipelines on AWS. Led end-to-end SDLC for an ISO 13485 compliant computer vision medical device in production.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jul 2022 – Dec 2022"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">AI Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Panasonic R&D Center</h4>
            <p>
              Engineered deep learning models and full-stack web applications (React, Node.js, MySQL) for client-tailored AI solutions, optimizing model performance and reporting experimental findings.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2022 – Jul 2022"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machine/Deep Learning Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Trendlines Medical</h4>
            <p>
              Developed medical image analysis software using PyQt and trained deep learning models for image stitching, super-resolution, and 3D scene reconstruction.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Feb 2016 – Mar 2017"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer (Robotics) Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Temasek Polytechnic</h4>
            <p>
              Developed embedded software and autonomous navigation controls for robotic systems.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
