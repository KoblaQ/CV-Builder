import type { AboutMeEntry } from '../../types';

interface Props {
  aboutMe: AboutMeEntry[];
}

const AboutMeDisplay = ({ aboutMe }: Props) => {
  const visibleItems = aboutMe?.filter((item) => item.isVisible); // Filter just for the Visible ones
  return (
    <div>
      <h2>ABOUT ME</h2>
      <hr />
      {visibleItems.map((item, index) => (
        <div key={index}>
          <strong>{item.role}</strong>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutMeDisplay;
