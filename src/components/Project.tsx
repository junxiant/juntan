import React from "react";
import recycitImg from '../assets/images/recycit_thumb.jpg';
import alzImg from '../assets/images/alz_thumb.jpg';
import pneumoniaImg from '../assets/images/pneumonia_thumb.png';
import heartDiseaseImg from '../assets/images/heartdisease_thumb.jpg';
import medReportImg from '../assets/images/medreportexplainer_thumb.jpg';
import '../assets/styles/Project.scss';

const projects = [
    {
        title: "e-Waste Sorter",
        image: recycitImg,
        link: "https://github.com/junxiant/eWaste_Sorter",
        description: "Prototype of an e-waste sorter using Computer Vision. First place winner of 2022 EEE Deep Learning Hackathon @ NTU."
    },
    {
        title: "Detecting Alzheimer's with Speech and Text",
        image: alzImg,
        link: "https://github.com/junxiant/Detect-Alzheimers-using-Speech-and-Text",
        description: "Multi-modal AI approach combining speech audio processing and natural language processing to detect Alzheimer's Disease."
    },
    {
        title: "Pneumonia Prediction with Chest X-Rays",
        image: pneumoniaImg,
        link: "https://github.com/junxiant/Pneumonia-Predictive-Analysis-with-XRays",
        description: "Deep learning classification pipeline using CNNs and Vision Transformers (ViT) to predict pneumonia from chest radiographs."
    },
    {
        title: "Heart Disease Screening",
        image: heartDiseaseImg,
        link: "https://github.com/junxiant/Heart-Disease-Screening",
        description: "AI and Large Language Model-driven screening system for early risk stratification and assessment of heart disease."
    },
    {
        title: "Medical Report Explainer",
        image: medReportImg,
        link: "https://github.com/junxiant/Med-Report-Explainer",
        description: "LLM application designed to translate complex medical diagnostic reports into clear, patient-friendly explanations."
    }
];

function Project() {
    return (
    <div className="projects-container" id="projects">
        <h1>Side Projects</h1>
        <div className="projects-grid">
            {projects.map((proj, idx) => (
                <div className="project" key={idx}>
                    <div className="project-image-wrapper">
                        <a href={proj.link} target="_blank" rel="noreferrer">
                            <img src={proj.image} alt={proj.title} />
                        </a>
                    </div>
                    <div className="project-info">
                        <a href={proj.link} target="_blank" rel="noreferrer">
                            <h2>{proj.title}</h2>
                        </a>
                        <p>{proj.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;
