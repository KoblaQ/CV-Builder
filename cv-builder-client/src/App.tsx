import { useState, useMemo } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

const cvData = {
  personalInfo: {
    name: 'EDEM QUASHIGAH',
    jobTitle: 'Software Developer',
    location: 'Helsinki, Finland',
    tel: '+358 45 123 4567',
    email: 'edemq123@gmail.com',
    linkedIn: 'https://www.linkedin.com/in/edemq/',
    gitHub: 'https://github.com/KoblaQ',
    aboutMe: `A recent graduate with a strong foundation in full stack software development, experienced in React, Node.JS and PostgreSQL through academic projects and an internship as a software developer.\n
    I bring prior professional experience from other Finnish workplaces, where I developed teamwork, coordination, and communication skills in both English and Finnish.\n
    I am passionate about building meaningful technical solutions, thrive in collaborative environments, and continuously invest in expanding my skills.\n
    My goal is to grow as a software developer in a dynamic and innovative environment.`,
  },
  workExperience: [
    {
      id: 1,
      companyName: 'Hamk Tech Research Unit',
      position: 'Software Developer Intern',
      startDate: '2024-05-22',
      endDate: '2024-10-22',
      description: null,
      isVisible: true,
      jobDescription: [
        'Refactored and optimized existing codebase, improving performance and maintainability',
        'Automated unit and integration tests to ensure high-quality deliverables',
        'Migrated legacy projects from ‘Create React App’ to Vite, reducing build times and improving developer experience',
        'Automated web app deployment using CI/CD pipelines (Azure, GitHub Actions)',
      ],
    },
    {
      id: 2,
      companyName: 'RTK - Palvelu Oy',
      position: 'Service Coordinator (Palveluohjaaja)',
      startDate: '2020-06-01',
      endDate: '2023-01-10',
      isVisible: true,
      jobDescription: [
        'Coordinated work schedules and logistics for an international team of over 20 employees',
        'Managed employee onboarding and training, improving team productivity',
        'Acted as an interim supervisor, ensuring smooth operations during management absences',
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: 'Bachelor of Business Administration',
      fieldOfStudy: 'Computer Applications',
      institution: 'Häme University of Applied Sciences',
      startYear: 2022,
      endYear: 2025,
      gpa: '4.95/5',
      isVisible: true,
    },
    {
      id: 2,
      degree: 'Master of Arts',
      fieldOfStudy: 'Learning, Education and Technology',
      institution: 'University of Oulu',
      startYear: 2015,
      endYear: 2017,
      gpa: null,
      isVisible: true,
    },
    {
      id: 3,
      degree: 'Bachelor of Arts',
      fieldOfStudy: 'Adult Education & Sociology',
      institution: 'University of Ghana',
      startYear: 2010,
      endYear: 2014,
      gpa: null,
      isVisible: true,
    },
  ],
  skills: [
    {
      id: 'skill-1',
      cvProfileId: 'cv-1',
      category: 'Programming Languages',
      name: 'JavaScript',
      orderIndex: 0,
      isVisible: true,
    },
    {
      id: 'skill-2',
      cvProfileId: 'cv-1',
      category: 'Programming Languages',
      name: 'Python',
      orderIndex: 1,
      isVisible: true,
    },
    {
      id: 'skill-3',
      cvProfileId: 'cv-1',
      category: 'Programming Languages',
      name: 'Java',
      orderIndex: 2,
      isVisible: true,
    },
    {
      id: 'skill-4',
      cvProfileId: 'cv-1',
      category: 'Frameworks and Libraries',
      name: 'React',
      orderIndex: 3,
      isVisible: true,
    },
    {
      id: 'skill-5',
      cvProfileId: 'cv-1',
      category: 'Frameworks and Libraries',
      name: 'Node.js',
      orderIndex: 4,
      isVisible: true,
    },
    {
      id: 'skill-6',
      cvProfileId: 'cv-1',
      category: 'Frameworks and Libraries',
      name: 'React Native',
      orderIndex: 5,
      isVisible: true,
    },
    {
      id: 'skill-7',
      cvProfileId: 'cv-1',
      category: 'Frameworks and Libraries',
      name: 'Robot Framework',
      orderIndex: 6,
      isVisible: true,
    },
    {
      id: 'skill-8',
      cvProfileId: 'cv-1',
      category: 'Frameworks and Libraries',
      name: 'Jest',
      orderIndex: 7,
      isVisible: true,
    },
    {
      id: 'skill-9',
      cvProfileId: 'cv-1',
      category: 'Frameworks and Libraries',
      name: 'Selenium',
      orderIndex: 8,
      isVisible: true,
    },
    {
      id: 'skill-10',
      cvProfileId: 'cv-1',
      category: 'Frameworks and Libraries',
      name: 'ASP.NET',
      orderIndex: 9,
      isVisible: true,
    },
    {
      id: 'skill-11',
      cvProfileId: 'cv-1',
      category: 'Frameworks and Libraries',
      name: 'TypeScript',
      orderIndex: 10,
      isVisible: true,
    },
    {
      id: 'skill-12',
      cvProfileId: 'cv-1',
      category: 'Frameworks and Libraries',
      name: 'Playwright',
      orderIndex: 11,
      isVisible: true,
    },
    {
      id: 'skill-13',
      cvProfileId: 'cv-1',
      category: 'Development Tools',
      name: 'Docker',
      orderIndex: 12,
      isVisible: true,
    },
    {
      id: 'skill-14',
      cvProfileId: 'cv-1',
      category: 'Development Tools',
      name: 'Visual Studio Code',
      orderIndex: 13,
      isVisible: true,
    },
    {
      id: 'skill-15',
      cvProfileId: 'cv-1',
      category: 'Development Tools',
      name: 'Git',
      orderIndex: 14,
      isVisible: true,
    },
    {
      id: 'skill-16',
      cvProfileId: 'cv-1',
      category: 'Development Tools',
      name: 'Postman',
      orderIndex: 15,
      isVisible: true,
    },
    {
      id: 'skill-17',
      cvProfileId: 'cv-1',
      category: 'Project Management and Collaboration',
      name: 'Jira',
      orderIndex: 16,
      isVisible: true,
    },
    {
      id: 'skill-18',
      cvProfileId: 'cv-1',
      category: 'Project Management and Collaboration',
      name: 'Confluence',
      orderIndex: 17,
      isVisible: true,
    },
    {
      id: 'skill-19',
      cvProfileId: 'cv-1',
      category: 'Project Management and Collaboration',
      name: 'Agile/Scrum',
      orderIndex: 18,
      isVisible: true,
    },
    {
      id: 'skill-20',
      cvProfileId: 'cv-1',
      category: 'Database Management',
      name: 'MySQL',
      orderIndex: 19,
      isVisible: true,
    },
    {
      id: 'skill-21',
      cvProfileId: 'cv-1',
      category: 'Database Management',
      name: 'PostgreSQL',
      orderIndex: 20,
      isVisible: true,
    },
    {
      id: 'skill-22',
      cvProfileId: 'cv-1',
      category: 'Database Management',
      name: 'MongoDB',
      orderIndex: 21,
      isVisible: true,
    },
    {
      id: 'skill-23',
      cvProfileId: 'cv-1',
      category: 'Additional Skills',
      name: 'CI/CD (GitHub Actions)',
      orderIndex: 22,
      isVisible: true,
    },
    {
      id: 'skill-24',
      cvProfileId: 'cv-1',
      category: 'Additional Skills',
      name: 'HTML',
      orderIndex: 23,
      isVisible: true,
    },
    {
      id: 'skill-25',
      cvProfileId: 'cv-1',
      category: 'Additional Skills',
      name: 'CSS',
      orderIndex: 24,
      isVisible: true,
    },
    {
      id: 'skill-26',
      cvProfileId: 'cv-1',
      category: 'Additional Skills',
      name: 'UiPath (RPA)',
      orderIndex: 25,
      isVisible: true,
    },
    {
      id: 'skill-27',
      cvProfileId: 'cv-1',
      category: 'Additional Skills',
      name: 'WordPress',
      orderIndex: 26,
      isVisible: true,
    },
  ],
  languages: [
    {
      id: 'lang-1',
      language: 'English',
      proficiency: 'Native',
      isVisible: true,
    },
    {
      id: 'lang-2',
      language: 'Finnish',
      proficiency: 'Fluent',
      isVisible: true,
    },
  ],
  projects: [
    {
      id: 'proj-1',
      name: 'Thesis project',
      description:
        'Designed and implemented a role-based authentication and authorization system using .NET 9, PostgreSQL and JSON web tokens',
      skills: '.NET 9, PostgreSQL, JWT',
      url: 'https://urn.fi/URN:NBN:fi:amk-2025060621260',
      isVisible: true,
    },
    {
      id: 'proj-2',
      name: 'Pizza Ordering Mobile App',
      description:
        'Used React-Native, Node.js, MongoDB and Google Cloud Platform (GCP) to create a cross-platform mobile application for a pizza restaurant.',
      skills: 'React Native, Node.js, MongoDB, GCP',
      url: 'https://github.com/KoblaQ/Mobile-Programming-Project',
      isVisible: true,
    },
    {
      id: 'proj-3',
      name: 'Hotel Booking Management System',
      description:
        'Used JavaScript (Node.js, Express) and MongoDB to create a hotel booking platform with secure CRUD functionalities',
      skills: 'Node.js, Express, MongoDB',
      url: 'https://github.com/KoblaQ/Web-Framework-Project',
      isVisible: true,
    },
  ],
  certifications: [
    {
      id: 'cert-1',
      name: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
      issueDate: '2023-06-01',
      expiryDate: null,
      credentialUrl: null,
      isVisible: true,
    },
    {
      id: 'cert-2',
      name: 'Microsoft Certified: Azure Fundamentals',
      issueDate: '2023-06-01',
      expiryDate: null,
      credentialUrl: null,
      isVisible: true,
    },
    {
      id: 'cert-3',
      name: 'Jira Fundamentals Badge',
      issueDate: '2023-03-01',
      expiryDate: null,
      credentialUrl: null,
      isVisible: true,
    },
    {
      id: 'cert-4',
      name: 'Confluence Fundamentals Badge',
      issueDate: '2023-03-01',
      expiryDate: null,
      credentialUrl: null,
      isVisible: true,
    },
  ],
};

function App() {
  // Group skills by category and sort by orderIndex
  const groupedSkills = useMemo(() => {
    return cvData.skills
      .filter((skill) => skill.isVisible)
      .sort((a, b) => a.orderIndex - b.orderIndex)
      .reduce<Record<string, typeof cvData.skills>>((acc, skill) => {
        if (!acc[skill.category]) acc[skill.category] = [];
        acc[skill.category].push(skill);
        return acc;
      }, {});
  }, [cvData.skills]);

  return (
    <>
      <div>
        <h1>{cvData.personalInfo.name}</h1>
        <h2>{cvData.personalInfo.jobTitle}</h2>
        <p>
          <em>
            {cvData.personalInfo.location} | {cvData.personalInfo.tel} |{' '}
            {cvData.personalInfo.email} |{' '}
            <a href={cvData.personalInfo.linkedIn} target="_blank">
              {cvData.personalInfo.linkedIn}
            </a>{' '}
            |{' '}
            <a href={cvData.personalInfo.gitHub} target="_blank">
              {cvData.personalInfo.gitHub}
            </a>
          </em>
        </p>
        <h2>ABOUT ME</h2>
        <hr />
        <div>
          {cvData.personalInfo.aboutMe.split('\n').map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
        <hr />

        <h2>RELEVANT WORK EXPERIENCE</h2>
        {cvData.workExperience.map((exp) => (
          <div key={exp.id}>
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
        {cvData.education.map((edu) => (
          <div key={edu.id}>
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
        {Object.entries(groupedSkills).map(([category, skills]) => (
          <div key={category} style={{ marginBottom: '1rem' }}>
            <strong>{category}:</strong>{' '}
            {skills.map((skill, index) => (
              <span key={skill.id}>
                {skill.name}
                {index < skills.length - 1 && ', '}
              </span>
            ))}
          </div>
        ))}

        <h2>LANGUAGE SKILLS</h2>
        <hr />
        <p>
          {cvData.languages.map((lang, index) => (
            <span key={lang.id}>
              <strong>{lang.language}</strong>: <em> {lang.proficiency}</em>
              {index < cvData.languages.length - 1 && ' | '}
            </span>
          ))}
        </p>

        <h2>RELEVANT PROJECTS</h2>
        <hr />
        {cvData.projects.map((project) => (
          <span key={project.id}>
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
        {cvData.certifications.map((cert) => (
          <p key={cert.id}>
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
