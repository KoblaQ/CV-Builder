import WorkExperienceDisplay from './WorkExperienceDisplay';
import WorkExperieneEntryModal from './WorkExperienceEntryModal';
// import WorkExperienceEntryForm from './WorkExperienceForm';

import type { CvData, WorkExperienceEntry } from '../../types';
import { useState } from 'react';

import cvService from '../../services/cv';

interface Props {
  cvData: CvData | null;
  setCvData: React.Dispatch<React.SetStateAction<CvData | null>>;
}

const defaultValues: WorkExperienceEntry = {
  companyName: 'COMPANY CHECK',
  position: '',
  startDate: '',
  endDate: '',
  jobDescription: [],
  isVisible: true,
};

// const edit;

// const updateSection = (values: WorkExperienceEntry) => {
//   // UPDATE SECTION LOGIC HERE
//   console.log('Updating Work Experience Section with values:', values);
// };

// Handle Edit Button Click
// const handleClickEdit = (event: SyntheticEvent) => {
//   event.preventDefault();
//   console.log('Edit clicked');
// };

// Work Experience Component
const WorkExperience = ({ cvData, setCvData }: Props) => {
  const workExperience = cvData?.workExperience; // Extract the workExperience info
  // const [edit, setEdit] = useState(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  // const [expId, setExpId] = useState(null);

  const openModal = (): void => {
    setModalOpen(true);
    console.log('modal opened');
  };

  const closeModal = (): void => {
    setModalOpen(false);
    console.log('modal closed');
  };

  const handleSubmit = async (values: WorkExperienceEntry): Promise<void> => {
    // Submit SECTION LOGIC HERE depending on the update or new

    const cvId: string | undefined = cvData?.id;
    const section = 'workExperience';
    if (!cvId) return; // needs this to accept the cvId

    console.log('Submitting Work Experience Section with values:', values);
    const updatedCv = await cvService.AddSection(cvId, section, values);
    setCvData(updatedCv);
    closeModal();
  };
  // const cvId = cvData?.id

  // if (edit) {
  //   setExpId(workExpeience?._id);
  // }
  return workExperience ? (
    <div>
      {/* <WorkExperienceEntryForm
        workExperience={
          edit ? { ...defaultValues, ...workExperience } : defaultValues
        }
        onSubmit={updateSection}
        // setEdit={setEdit}
      /> */}

      <WorkExperienceDisplay workExperience={workExperience} />

      <WorkExperieneEntryModal
        modalOpen={modalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        workExperience={defaultValues}
      />

      <button onClick={() => openModal()}>ADD</button>
    </div>
  ) : (
    <div>...loading Relevant Work Experiences</div>
  );
};

export default WorkExperience;
