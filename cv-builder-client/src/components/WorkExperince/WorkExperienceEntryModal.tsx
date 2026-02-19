import WorkExperienceEntryForm from './WorkExperienceForm';

import type { WorkExperienceEntry } from '../../types';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (values: WorkExperienceEntry) => void;
  workExperience: WorkExperienceEntry;
}

const WorkExperieneEntryModal = ({
  onClose,
  modalOpen,
  onSubmit,
  workExperience,
}: Props) => {
  return (
    <div>
      <dialog
        id="workExperienceDialog"
        open={modalOpen}
        onClose={() => onClose()}
      >
        <h1>{workExperience._id ? 'Edit' : 'Add'} Work Experience</h1>
        <hr />
        <div>
          <h3>Error Message Here</h3>
        </div>
        <WorkExperienceEntryForm
          onSubmit={onSubmit}
          workExperience={workExperience}
          onCancel={onClose}
        />
      </dialog>
    </div>
  );
};

export default WorkExperieneEntryModal;
