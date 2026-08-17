import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faBrain, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsCloudAndMedical = [
    "AWS (ECS, S3, RDS)",
    "Docker",
    "Ubuntu / Linux",
    "Git",
    "3D Slicer",
    "OHIF",
    "XNAT"
];

const labelsAIML = [
    "PyTorch",
    "TensorFlow",
    "OpenCV",
    "Weights & Biases",
    "RAG Pipelines",
    "LLMs",
    "Computer Vision",
    "Speech & Audio (ASR)",
    "Time-Series Analysis"
];

const labelsFullStack = [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Flask",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "HTML5 / CSS3"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCloud} size="3x"/>
                    <h3>Cloud & Medical Software Tools</h3>
                    <p>Skilled in deploying cloud-native AI workloads on AWS, containerization with Docker, and working within medical imaging and health tech platforms (OHIF, XNAT, 3D Slicer).</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsCloudAndMedical.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>AI / Machine Learning & LLMs</h3>
                    <p>Experience architecting clinical decision support systems, developing Retrieval-Augmented Generation (RAG) pipelines, and engineering computer vision and deep learning models.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsAIML.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Full-Stack & Software Engineering</h3>
                    <p>Proficient in architecting end-to-end applications with modern frontend frameworks and robust backend services, ensuring reliable data flow and scalable architecture.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFullStack.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
