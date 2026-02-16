import type { CvData } from '../../types';

import PersonalInfoDisplay from './PersonalInfoDisplay';

interface Props {
  cvData: CvData | null;
}

const PersonalInfo = ({ cvData }: Props) => {
  const personalInfo = cvData?.personalInfo; // Extract the personal info from the cvData

  return personalInfo ? (
    <PersonalInfoDisplay personalInfo={personalInfo} />
  ) : null;
};

export default PersonalInfo;
