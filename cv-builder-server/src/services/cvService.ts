import cvData from '../data/cvs';

import { CvData } from '../types';

const getAllCvData = (): CvData[] => {
  return cvData;
};

// const findById = (id: string): CvData | undefined => {
//   const cv = cvData.find((cv) => cv.id === id);
//   return cv;
// };
export default {
  getAllCvData,
  // findById,
};
