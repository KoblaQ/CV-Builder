import type { WorkExperienceEntry } from '../../types';

import { useState, type SyntheticEvent } from 'react';

// interface Props {
//   workExperience: string;
// }

// Work Experience Form Component
const WorkExperienceEntryForm = () => {
  const [newEntry, setNewEntry] = useState<WorkExperienceEntry>({
    companyName: '',
    position: '',
    startDate: '',
    endDate: '',
    jobDescription: [],
    isVisible: true,
  });

  const [descriptionInput, setDescriptionInput] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'isVisible') {
      setNewEntry((newEntry) => ({
        ...newEntry,
        isVisible: !newEntry.isVisible,
      }));
    } else if (name === 'description') {
      setDescriptionInput(value);
    } else {
      setNewEntry((newEntry) => ({ ...newEntry, [name]: value }));
    }
  };

  const handleAddDescription = (event: SyntheticEvent) => {
    event.preventDefault();

    if (descriptionInput) {
      setNewEntry((newEntry) => ({
        ...newEntry,
        jobDescription: [...newEntry.jobDescription, descriptionInput],
      }));
    }

    setDescriptionInput('');
  };

  const addEntry = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log('submittedd');
    console.log(newEntry);
    setNewEntry({
      companyName: '',
      position: '',
      startDate: '',
      endDate: '',
      jobDescription: [],
      isVisible: true,
    });
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
              value={newEntry.companyName}
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
              value={newEntry.position}
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
              value={newEntry.startDate}
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
              value={newEntry.endDate}
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
              onChange={handleChange}
            />
            <button type="button" onClick={handleAddDescription}>
              Add
            </button>
            <ul>
              {newEntry.jobDescription.map((desc, index) => (
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
              checked={newEntry.isVisible}
              onChange={handleChange}
            />
          </label>
        </div>

        <button>Add Experience</button>
      </form>
    </div>
  );
};

export default WorkExperienceEntryForm;
