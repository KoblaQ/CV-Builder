import axios from 'axios';
import type { CvData } from '../types';

import { apiBaseUrl } from '../constants';

// Get all CVs

const getAll = async () => {
  const { data } = await axios.get<CvData[]>(`${apiBaseUrl}/cvs`);
  return data;
};

// const CV BY ID
const getByID = async (id: string) => {
  const { data } = await axios.get<CvData>(`${apiBaseUrl}/${id}`);
  return data;
};

// Update CV SECTION
const updateSection = async () => {
  const { data } = await axios.put<CvData[]>(`${apiBaseUrl}/cvs`);
  return data;
};

// Update CV SECTION (T because i want to make it generic to be used for every section)
const AddSection = async <T>(
  cvId: string,
  section: string,
  updateObject: T,
) => {
  const { data } = await axios.put<CvData>(
    `${apiBaseUrl}/cvs/${cvId}/${section}`,
    updateObject,
  );
  return data;
};

export default {
  getAll,
  getByID,
  updateSection,
  AddSection,
};
