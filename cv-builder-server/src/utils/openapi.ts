import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from '@asteasolutions/zod-to-openapi';

// ONE registry for the whole app — everything imports from here
export const registry = new OpenAPIRegistry();

export const generateOpenAPIDocument = () => {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: '3.0.0',
    info: {
      title: 'CV Builder',
      version: '1.0.0',
      description: 'API documentation for CV-Builder application',
    },
    servers: [{ url: '/api' }],
  });
};
