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
        <h1>Add New Experience</h1>
        <hr />
        <div>Error Message Here</div>
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
