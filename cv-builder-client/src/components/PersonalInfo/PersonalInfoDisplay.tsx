import type { UserInfoEntry } from '../../types';

interface Props {
  personalInfo: UserInfoEntry | null;
}

const PersonalInfoDisplay = ({ personalInfo }: Props) => {
  return (
    <div>
      <h1>{personalInfo?.name}</h1>
      <h2>{personalInfo?.jobTitle}</h2>
      <p>
        <em>
          {personalInfo?.location} | {personalInfo?.tel} | {personalInfo?.email}{' '}
          |{' '}
          <a href={personalInfo?.linkedIn} target="_blank">
            {personalInfo?.linkedIn}
          </a>{' '}
          |{' '}
          <a href={personalInfo?.gitHub} target="_blank">
            {personalInfo?.gitHub}
          </a>
        </em>
      </p>
    </div>
  );
};

export default PersonalInfoDisplay;
