import { ZodError } from 'zod';

export const formatZodErrors = (error: ZodError) => {
  return error.errors.reduce(
    (acc, curr) => {
      const field = curr.path[0] as string;
      acc[field] = curr.message;
      return acc;
    },
    {} as { [key: string]: string },
  );
};
