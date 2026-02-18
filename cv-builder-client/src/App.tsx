import { useState, useEffect } from 'react';
// import axios from 'axios';
import type { CvData } from './types';

import cvService from './services/cv';
// import { apiBaseUrl } from './constants';

// Import Components
import PersonalInfo from './components/PersonalInfo';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperince';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {
  const [cvData, setCvData] = useState<CvData | null>(null);
  // const [cvId, setCvId] = useState<string | null>(null);
  // const [cvList, setCvList] = useState<CvData[] | null>;

  // Fetch CV data from the backend API
  useEffect(() => {
    // void axios.get<void>(`${apiBaseUrl}/ping`);
    const fetchCVList = async () => {
      const cvs = await cvService.getAll();
      setCvData(cvs[0]);
    };
    void fetchCVList();
    // console.log(cvData);
  }, []);
  console.log(cvData);

  return (
    <div>
      <PersonalInfo cvData={cvData} />
      <AboutMe cvData={cvData} />
      <WorkExperience cvData={cvData} setCvData={setCvData} />
      <Education cvData={cvData} />
      <Skills cvData={cvData} />
      <Languages cvData={cvData} />
      <Projects cvData={cvData} />
      <Certificates cvData={cvData} />
    </div>
  );
}

export default App;
