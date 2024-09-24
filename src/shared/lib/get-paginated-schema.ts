import { z } from 'zod';

export const getPaginatedSchema = (dataName: string, schema: z.ZodTypeAny) =>
  z.object({
    [dataName]: z.array(schema),
    total: z.number(),
    skip: z.number(),
    limit: z.number(),
  });
