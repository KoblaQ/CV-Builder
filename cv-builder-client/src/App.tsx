import { useState, useMemo, useEffect } from 'react';
import axios from 'axios';
import type { CvData } from './types';

import cvService from './services/cv';
import { apiBaseUrl } from './constants';

// Import Components
import PersonalInfo from './components/PersonalInfo';

function App() {
  const [cvData, setCvData] = useState<CvData | null>(null);

  // Fetch CV data from the backend API
  useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchCVList = async () => {
      const cvs = await cvService.getAll();
      setCvData(cvs[0]);
    };
    void fetchCVList();
    console.log(cvData);
  }, []);
  // console.log(cvData);

  // Group skills by category for easier rendering
  const groupedSkills = useMemo(() => {
    return cvData?.skills
      .filter((skill) => skill.isVisible)
      .sort((a, b) => a.name.localeCompare(b.name)) // compare and sort them alphabetically
      .reduce<Record<string, typeof cvData.skills>>((acc, skill) => {
        if (!acc[skill.categoryId]) acc[skill.categoryId] = [];
        acc[skill.categoryId].push(skill);
        return acc;
      }, {});
  }, [cvData?.skills]);

  return (
    <>
      <div>
        <PersonalInfo cvData={cvData} />
        <h2>ABOUT ME</h2>
        <hr />
        <div>
          {cvData?.aboutMe.map((entry, idx) => (
            <div key={idx}>
              <strong>{entry.role}</strong>
              <p>{entry.description}</p>
            </div>
          ))}
        </div>
        <hr />

        <h2>RELEVANT WORK EXPERIENCE</h2>
        {cvData?.workExperience.map((exp) => (
          <div key={exp.companyName}>
            <p>{exp.companyName}</p>
            <p>
              <strong>{exp.position}</strong> | {exp.startDate} - {exp.endDate}
            </p>
            {exp.jobDescription.map((desc, index) => (
              <ul key={index}>
                <li>{desc}</li>
              </ul>
            ))}
          </div>
        ))}
        <h2>EDUCATION</h2>
        <hr />
        {cvData?.education.map((edu) => (
          <div key={edu.institution}>
            {/* <div key={edu.id}> */}
            <p>
              {edu.startYear} - {edu.endYear} |{' '}
              <strong>{edu.institution}</strong>{' '}
              {edu.gpa && ` | GPA: ${edu.gpa}`}
            </p>
            <p>
              {edu.degree} - <em>{edu.fieldOfStudy}</em>
            </p>
          </div>
        ))}
        <h2>TECHNICAL SKILLS</h2>
        <hr />
        {/* Group skills by category */}
        {Object.entries(groupedSkills ?? {}).map(([category, skills]) => (
          <div key={category} style={{ marginBottom: '1rem' }}>
            <strong>{category}:</strong>{' '}
            {skills.map((skill, index) => (
              <span key={skill._id}>
                {skill.name}
                {index < skills.length - 1 && ', '}
              </span>
            ))}
          </div>
        ))}

        <h2>LANGUAGE SKILLS</h2>
        <hr />
        <p>
          {cvData?.languages.map((lang, index) => (
            <span key={lang._id}>
              <strong>{lang.language}</strong>: <em> {lang.proficiency}</em>
              {index < cvData.languages.length - 1 && ' | '}
            </span>
          ))}
        </p>

        <h2>RELEVANT PROJECTS</h2>
        <hr />
        {cvData?.projects.map((project) => (
          <span key={project._id}>
            <p>
              <strong>{project.name}</strong>
            </p>
            <a href={project.url} target="_blank">
              {project.url}
            </a>
            <em>
              <p>{project.description}</p>
            </em>
          </span>
        ))}

        <h2>CERTIFICATES</h2>
        <hr />
        {cvData?.certificates?.map((cert) => (
          <p key={cert._id}>
            <span>
              <strong>{cert.name}</strong>| {cert.issueDate}
            </span>
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
