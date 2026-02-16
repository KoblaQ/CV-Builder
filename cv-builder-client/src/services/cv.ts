import axios from 'axios';
import type { CvData } from '../types';

import { apiBaseUrl } from '../constants';

// Get all CVs

const getAll = async () => {
  const { data } = await axios.get<CvData[]>(`${apiBaseUrl}/cvs`);
  return data;
};

// Update CV SECTION
const updateSection = async () => {
  const { data } = await axios.put<CvData[]>(`${apiBaseUrl}/cvs`);
  return data;
};

export default {
  getAll,
  updateSection,
};
