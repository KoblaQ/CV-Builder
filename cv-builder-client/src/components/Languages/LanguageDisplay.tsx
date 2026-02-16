import type { LanguageEntry } from '../../types';

interface Props {
  languages: LanguageEntry[];
}

const LanguageDisplay = ({ languages }: Props) => {
  const visibleItems = languages?.filter((item) => item.isVisible); // Filter just for the Visible ones
  return (
    <div>
      <h2>LANGUAGE SKILLS</h2>
      <hr />
      <p>
        {visibleItems.map((lang, index) => (
          <span key={lang._id}>
            <strong>{lang.language}</strong>: <em> {lang.proficiency}</em>
            {index < visibleItems.length - 1 && ' | '}
          </span>
        ))}
      </p>
    </div>
  );
};

export default LanguageDisplay;
