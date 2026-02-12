// import express, { NextFunction, Request, Response } from 'express';
// const router = express.Router();

// import { z, ZodError } from 'zod';

// const newEntryParser = (schema: ) => (req: Request, _res: Response, next: NextFunction)
// {
//   try {
//     schema.parse(req.body);
//     next();
//   } catch (error: unknown) {
//     next(error);
//   }
// };

// const errorMiddleWare = (
//   error: unknown,
//   _req: Request,
//   res: Response,
//   next: NextFunction,
// ) => {
//   if (error instanceof z.ZodError) {
//     res.status(400).send({ error: error.issues });
//   } else {
//     next(error);
//   }
// };

// module.exports = {
// 	newEntryParser
//   errorMiddleWare,
// };
