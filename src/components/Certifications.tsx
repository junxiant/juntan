import React from "react";
import '../assets/styles/Certifications.scss';

const certificationList = [
  {
    title: "ISO 13485:2016 Standard, 21 CFR Part 820 and 21 CFR Part 11 Regulation Training Course",
    category: "Medical Device Quality & Regulatory Compliance",
    description: "Quality management systems for medical devices, FDA 21 CFR 820 regulations, and 21 CFR Part 11 electronic records/signatures standards."
  },
  {
    title: "ISO 13485:2016 Internal Auditor Training Course",
    category: "Audit & Compliance Validation",
    description: "Internal audit procedures, quality system assessment, compliance reporting, and audit readiness."
  },
  {
    title: "Project Management Professional (PMP) (SF)",
    category: "Project Leadership & Engineering Delivery",
    description: "End-to-end project management methodologies, risk mitigation, resource planning, and cross-functional team coordination."
  },
  {
    title: "CITI Program (Human, Data or Specimens Only Research)",
    category: "Clinical Research Ethics & Data Safety",
    description: "Ethical research practices, patient specimen handling, clinical data security, and biomedical research regulations."
  }
];

function Certifications() {
  return (
    <div className="certifications-container" id="certifications">
      <h1>Certifications</h1>
      <div className="cert-table-wrapper">
        <table>
          <thead>
            <tr>
              <th style={{ width: "35%" }}>Certification</th>
              <th style={{ width: "25%" }}>Domain</th>
              <th style={{ width: "40%" }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {certificationList.map((cert, index) => (
              <tr key={index}>
                <td className="cert-name">{cert.title}</td>
                <td>{cert.category}</td>
                <td>{cert.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Certifications;
