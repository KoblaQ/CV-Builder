// import { useEffect } from 'react';
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
  companyName: '',
  position: '',
  startDate: '',
  endDate: '',
  jobDescription: [],
  isVisible: true,
};

// Work Experience Component
const WorkExperience = ({ cvData, setCvData }: Props) => {
  const workExperience = cvData?.workExperience; // Extract the workExperience info
  // const [edit, setEdit] = useState(true);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const [itemsToEdit, setItemsToEdit] = useState<WorkExperienceEntry>({
    companyName: '',
    position: '',
    startDate: '',
    endDate: '',
    jobDescription: [],
    isVisible: true,
  });

  // useEffect(() => {
  //   setItemsToEdit(itemsToEdit);
  //   console.log(itemsToEdit);
  // }, [itemsToEdit]);

  const openModal = (entry: WorkExperienceEntry): void => {
    setModalOpen(true);
    setItemsToEdit(entry);
    // console.log('modal opened', entry);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    // console.log('modal closed');
  };

  const handleSubmit = async (values: WorkExperienceEntry): Promise<void> => {
    // Submit SECTION LOGIC depending on the update or new

    const cvId: string | undefined = cvData?.id;
    const section = 'workExperience';
    if (!cvId) return; // needs this to accept the cvId

    if (values._id) {
      console.log('trigger add the values', values);
      const updatedCv = await cvService.updateSectionItem(
        cvId,
        section,
        values._id,
        values,
      );
      setCvData(updatedCv);
    } else {
      console.log('Submitting Work Experience Section with values:', values);
      const updatedCv = await cvService.AddSection(cvId, section, values);
      setCvData(updatedCv);
    }
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

      <WorkExperienceDisplay
        workExperienceList={workExperience}
        workExperience={itemsToEdit ?? defaultValues}
        modalOpen={modalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        onOpenModal={openModal}
        // setItemsToEdit={setItemsToEdit}
      />

      <WorkExperieneEntryModal
        modalOpen={modalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        workExperience={itemsToEdit ?? defaultValues}
      />

      <button onClick={() => openModal(defaultValues)}>ADD</button>
    </div>
  ) : (
    <div>...loading Relevant Work Experiences</div>
  );
};

export default WorkExperience;
