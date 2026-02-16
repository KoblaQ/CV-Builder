import type { CvData } from '../../types';
import EducationDisplay from './EducationDisplay';

interface Props {
  cvData: CvData | null;
}

const Education = ({ cvData }: Props) => {
  const education = cvData?.education; // Extract the about me info

  return education ? (
    <EducationDisplay education={education} />
  ) : (
    <div>...loading Education</div>
  );
};

export default Education;
