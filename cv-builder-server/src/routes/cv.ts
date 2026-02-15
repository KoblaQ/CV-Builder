import express, { Response, Request, NextFunction } from 'express';

import z from 'zod';

import cvService from '../services/cvService';
import { NewCvDataEntrySchema } from '../utils';
import { CvData, NewCvDataEntry, UpdateCvDataEntry } from '../types';

const router = express.Router();

// router.get('/', (_req, res) => {
//   res.send('Hello from the other side');
// });

// Get all CVs
/**
 * @openapi
 * /api/cvs:
 *   get:
 *     summary: Get all CVs
 *     tags:
 *        - CVS
 *     responses:
 *       200:
 *         description: OK
 */
router.get('/', async (_req, res: Response<CvData[]>) => {
  const cvs = await cvService.getAllCvData();
  res.send(cvs);
});

/**
 * @openapi
 * /api/cvs/{id}:
 *  get:
 *   summary: Get CV by id
 *   tags:
 *        - CVS
 *   responses:
 *     200:
 *       description: OK
 */

// Get CV by ID
router.get('/:id', async (req, res: Response<CvData | { error: string }>) => {
  const cv = await cvService.findById(String(req.params.id));

  if (cv) {
    res.send(cv);
  } else {
    res.status(404).send({ error: 'CV not found' });
  }
});

/**
 * @openapi
 * /api/cvs/{id}:
 *   delete:
 *     summary: Delete a CV
 *     tags:
 *        - CVS
 *     responses:
 *       200:
 *         description: OK
 */

// Delete CV
router.delete(
  '/:id',
  async (req, res: Response<CvData | { error: string }>) => {
    const deletedUser = await cvService.deleteCV(req.params.id);

    if (deletedUser) {
      return res.status(204).end();
    } else {
      return res.status(401).json({ error: 'CV not found' });
    }
  },
);

const errorMiddleWare = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

const newCVParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    NewCvDataEntrySchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

/**
 * @openapi
 * /api/cvs/{cv}:
 *   post:
 *     summary: Create a CV
 *     tags:
 *        - CVS
 *     responses:
 *       201:
 *         description: Created
 */
router.post(
  '/',
  newCVParser,
  async (
    req: Request<unknown, unknown, NewCvDataEntry>,
    res: Response<CvData>,
  ) => {
    const addedEntry = await cvService.addCV(req.body);
    res.json(addedEntry);
  },
);

/**
 * @openapi
 * /api/cvs/{id}:
 *   put:
 *     summary: Update a CV
 *     tags:
 *        - CVS
 *     responses:
 *       200:
 *         description: OK
 */

// Update a cv section
router.put(
  '/:cvId/:section/:itemId',
  async (
    req: Request<
      { cvId: string; section: keyof CvData; itemId: string },
      unknown,
      UpdateCvDataEntry
    >,
    res: Response<CvData | { error: string }>,
  ) => {
    const { cvId, section, itemId } = req.params;

    const updateFields: Partial<CvData> = req.body;

    const updatedEntry = await cvService.updateSectionItem(
      cvId,
      section,
      itemId,
      updateFields,
    );
    res.json(updatedEntry ?? { error: 'Error updating' });
  },
);

router.use(errorMiddleWare);

export default router;
