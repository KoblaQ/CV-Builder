import type { WorkExperienceEntry } from '../../types';

import { useState, type SyntheticEvent } from 'react';

interface Props {
  workExperience: WorkExperienceEntry;
  onSubmit: (values: WorkExperienceEntry) => void;
  onCancel: () => void;
  // setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

// Work Experience Form Component
const WorkExperienceEntryForm = ({
  workExperience,
  onSubmit,
  onCancel,
}: Props) => {
  const [newEntry, setNewEntry] = useState<WorkExperienceEntry>(workExperience);

  const [descriptionInput, setDescriptionInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setNewEntry((newEntry) => {
      if (name === 'isVisible') {
        return { ...newEntry, isVisible: !newEntry?.isVisible };
      } else {
        return { ...newEntry, [name]: value };
      }
    });
  };

  const handleAddDescription = (event: SyntheticEvent) => {
    event.preventDefault();

    setNewEntry((newEntry) => {
      if (descriptionInput) {
        return {
          ...newEntry,
          jobDescription: [...newEntry.jobDescription, descriptionInput],
        };
      }
      return newEntry;
    });

    setDescriptionInput('');
  };

  const addEntry = (event: SyntheticEvent) => {
    event.preventDefault();
    setNewEntry(workExperience);
    onSubmit(newEntry);
  };
  return (
    <div>
      <h2>Work Experience Form Here</h2>
      <form onSubmit={addEntry}>
        <div>
          <label htmlFor="companyName">
            company Name:{' '}
            <input
              type="text"
              name="companyName"
              value={newEntry?.companyName}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="position">
            Job Title:{' '}
            <input
              type="text"
              name="position"
              value={newEntry?.position}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="startDate">
            Start Date:{' '}
            <input
              type="text"
              name="startDate"
              value={newEntry?.startDate}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="endDate">
            End Date:{' '}
            <input
              type="text"
              name="endDate"
              value={newEntry?.endDate}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description:{' '}
            <input
              type="text"
              name="description"
              value={descriptionInput}
              onChange={({ target }) => setDescriptionInput(target.value)}
            />
            <button type="button" onClick={handleAddDescription}>
              Add
            </button>
            <ul>
              {newEntry?.jobDescription.map((desc, index) => (
                <li key={index}> {desc}</li>
              ))}
            </ul>
          </label>
        </div>
        <div>
          <label htmlFor="isVisible">
            Visible in the current CV:{' '}
            <input
              type="checkbox"
              name="isVisible"
              checked={newEntry?.isVisible}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button>Add Experience</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkExperienceEntryForm;
