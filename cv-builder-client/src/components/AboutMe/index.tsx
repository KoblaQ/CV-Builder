import AboutMeDisplay from './AboutMeDisplay';
import type { CvData } from '../../types';

interface Props {
  cvData: CvData | null;
}

const AboutMe = ({ cvData }: Props) => {
  const aboutMe = cvData?.aboutMe; // Extract the about me info

  return aboutMe ? <AboutMeDisplay aboutMe={aboutMe} /> : <div>...LOADING</div>;
};

export default AboutMe;
