import { CvData, NewCvDataEntry } from '../types';

import CV from '../models/cv';

const getAllCvData = async (): Promise<CvData[] | undefined> => {
  const cvs = await CV.find({});

  return cvs;
};

const findById = async (id: string): Promise<CvData | null> => {
  const cv = await CV.findById(id);
  return cv;
};

const addCV = async (entry: NewCvDataEntry): Promise<CvData> => {
  const newCVEntry = new CV(entry);

  const savedCV = await newCVEntry.save();
  return savedCV;
};

// const updateSectionItem = async (
//   itemId: string,
//   updatedFields: any, // any because it should be able to update any section.
// ): Promise<CvData | null> => {
//   const updatedSection = await CV.findByIdAndUpdate(
//     itemId,
//     { $set: updatedFields },
//     {
//       new: true,
//     },
//   );
//   return updatedSection;
// };

// Quite complicated but updates each single item in the sections.
const updateSectionItem = async (
  cvId: string,
  section: keyof CvData, // so we use only valid names of the cv setions
  itemId: string,
  updateFields: any, // any because it should be able to update any section.
): Promise<CvData | null> => {
  const filter = { _id: cvId, [`${section}._id`]: itemId };

  const setPayload = Object.fromEntries(
    Object.entries(updateFields).map(([key, value]) => [
      `${section}.$.${key}`,
      value,
    ]),
  );
  const update = { $set: setPayload };

  const updatedSection = await CV.findOneAndUpdate(filter, update, {
    returnDocument: 'after',
  });
  return updatedSection;
};

// Delete CV
const deleteCV = async (id: string): Promise<CvData | null> => {
  const deletedCV = await CV.findByIdAndDelete(id);
  return deletedCV;
};

export default {
  getAllCvData,
  findById,
  addCV,
  updateSectionItem,
  deleteCV,
};
