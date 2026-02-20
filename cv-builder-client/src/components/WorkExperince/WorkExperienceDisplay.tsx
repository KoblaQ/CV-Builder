import type { WorkExperienceEntry } from '../../types';
import WorkExperieneEntryModal from './WorkExperienceEntryModal';

interface Props {
  workExperienceList: WorkExperienceEntry[];
  workExperience: WorkExperienceEntry;
  modalOpen: boolean;
  onClose: () => void;
  onOpenModal: (entry: WorkExperienceEntry) => void;
  onSubmit: (values: WorkExperienceEntry) => void;
  onDelete: (values: WorkExperienceEntry) => void;
}

const WorkExperienceDisplay = ({
  workExperienceList,
  workExperience,
  modalOpen,
  onClose,
  onOpenModal,
  onSubmit,
  onDelete,
}: Props) => {
  const visibleItems = workExperienceList?.filter((item) => item.isVisible); // Filter just for the Visible ones

  return (
    <div>
      <h2>RELEVANT WORK EXPERIENCE</h2>
      <hr />
      {visibleItems.map((exp) => (
        <div key={exp._id}>
          <div>
            <p>{exp.companyName}</p>
            <p>
              <strong>{exp.position}</strong> | {exp.startDate} - {exp.endDate}
            </p>
            {exp.jobDescription.map((desc, index) => (
              <div key={index}>
                <ul>
                  <li>{desc}</li>
                </ul>
              </div>
            ))}
          </div>
          <div>
            <button type="button" onClick={() => onOpenModal(exp)}>
              Edit Details
            </button>
            <button type="button" onClick={() => onDelete(exp)}>
              delete
            </button>
          </div>
        </div>
      ))}
      <WorkExperieneEntryModal
        modalOpen={modalOpen}
        onClose={onClose}
        onSubmit={onSubmit}
        workExperience={workExperience}
      />
    </div>
  );
};

export default WorkExperienceDisplay;
