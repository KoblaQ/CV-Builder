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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'isVisible') {
      setNewEntry((newEntry) => ({
        ...newEntry,
        isVisible: !newEntry.isVisible,
      }));
    } else if (name === 'description') {
      // setNewEntry((newEntry) => ({...newEntry,jobDescription: value.split(',') }))
    } else {
      setNewEntry((newEntry) => ({ ...newEntry, [name]: value }));
    }
  };

  // const toggleVisibility = (entry: React.ChangeEvent<HTMLInputElement>) => {
  // 	setNewEntry({...entry, entry})
  // }

  const addEntry = (event: SyntheticEvent) => {
    event.preventDefault();
    console.log('submittedd');
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
              value={newEntry.jobDescription.join(', ')}
              onChange={handleChange}
            />
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
              // value={newEntry.isVisible}
            />
          </label>
        </div>

        <button>Add</button>
      </form>
    </div>
  );
};

export default WorkExperienceEntryForm;
