import express from 'express';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
// import {
//   OpenAPIRegistry,
//   OpenApiGeneratorV3,
// } from '@asteasolutions/zod-to-openapi';

// import mongoose from 'mongoose';
import { MONGODB_URI, connectDB } from './utils/config';

import cvRouter from './routes/cv';
import userRouter from './routes/user';
import skillsCategoryRouter from './routes/skillsCategory';

connectDB(MONGODB_URI); // connect to MongoDB before starting the server

const app = express();

// Configure the app to use Swagger
const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CV-Builder',
      version: '1.0.0',
      description: 'API documentation for CV-Builder application',
    },
  },
  apis: ['./src/routes/*.ts'],
};

// const registry = new OpenAPIRegistry();

// // Register definitions
// const generator = new OpenApiGeneratorV3(registry.definitions);
// const openApiSpecification = generator.generateDocument({
//   openapi: '3.0.0',
//   info: {
//     title: 'CV-Builder',
//     version: '1.0.0',
//     description: 'API documentation for CV-Builder application',
//   },
// });

app.use(express.json());
app.use(cors());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('Ping from cv builder');
  res.send('pong cv builder');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(options)));
app.use('/api/cvs', cvRouter);
app.use('/api/users', userRouter);
app.use('/api/skillsCategories', skillsCategoryRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
