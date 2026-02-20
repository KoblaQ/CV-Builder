import type { WorkExperienceEntry } from '../../types';

import { useEffect, useState, type SyntheticEvent } from 'react';

interface Props {
  workExperience: WorkExperienceEntry;
  onSubmit: (values: WorkExperienceEntry) => void;
  onCancel: () => void;
}

// Work Experience Form Component
const WorkExperienceEntryForm = ({
  workExperience,
  onSubmit,
  onCancel,
}: Props) => {
  const [newEntry, setNewEntry] = useState<WorkExperienceEntry>(workExperience);

  const [descriptionInput, setDescriptionInput] = useState('');

  // Needed to update the form values when the workExperience prop changes (e.g., when opening the modal for a different entry)
  useEffect(() => {
    setNewEntry(workExperience);
  }, [workExperience]);

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

  // Add descriptions to the list of job descriptions
  const handleAddDescription = (event: SyntheticEvent) => {
    event.preventDefault();

    setNewEntry((newEntry) => {
      if (descriptionInput) {
        return {
          ...newEntry,
          jobDescription: [
            ...(newEntry?.jobDescription || []),
            descriptionInput,
          ],
        };
      }
      return newEntry;
    });

    setDescriptionInput('');
  };

  // Remove the descriptions or added descriptions
  const handleRemoveDescription = (index: number) => {
    {
      setNewEntry((prev) => ({
        ...prev,
        jobDescription: prev?.jobDescription?.filter((_desc, i) => i !== index),
      }));
    }
  };

  const addEntry = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit(newEntry);
    setNewEntry(workExperience); // RESET the values
  };

  return (
    <div>
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
              {newEntry?.jobDescription?.map((desc, index) => (
                <div key={index}>
                  <li>
                    {' '}
                    {desc}{' '}
                    <button
                      type="button"
                      onClick={() => handleRemoveDescription(index)}
                    >
                      remove
                    </button>
                  </li>
                </div>
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
          <button>{workExperience._id ? 'Update' : 'Add'}</button>
          {/* <button>Add Experience</button> */}
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default WorkExperienceEntryForm;
