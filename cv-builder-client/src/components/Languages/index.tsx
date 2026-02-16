import type { CvData } from '../../types';
import EducationDisplay from './LanguageDisplay';

interface Props {
  cvData: CvData | null;
}

const Languages = ({ cvData }: Props) => {
  const languages = cvData?.languages;

  return languages ? (
    <EducationDisplay languages={languages} />
  ) : (
    <div>...loading Languages</div>
  );
};

export default Languages;
