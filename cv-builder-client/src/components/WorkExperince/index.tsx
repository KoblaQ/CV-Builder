import WorkExperienceDisplay from './WorkExperienceDisplay';
import WorkExperienceEntryForm from './WorkExperienceForm';

import type { CvData, WorkExperienceEntry } from '../../types';

// import cvService from '../../services/cv';

interface Props {
  cvData: CvData | null;
}

const defaultValues: WorkExperienceEntry = {
  companyName: '',
  position: '',
  startDate: '',
  endDate: '',
  jobDescription: [],
  isVisible: true,
};

// const edit;

// const updateSection = ({}) => {

// }

// Work Experience Component
const WorkExperience = ({ cvData }: Props) => {
  const workExperience = cvData?.workExperience; // Extract the workExperience info

  return workExperience ? (
    <div>
      <WorkExperienceEntryForm workExperience={defaultValues} />
      <WorkExperienceDisplay workExperience={workExperience} />
    </div>
  ) : (
    <div>...loading Relevant Work Experiences</div>
  );
};

export default WorkExperience;
