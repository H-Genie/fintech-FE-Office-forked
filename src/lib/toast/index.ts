import { toast } from '@hooks/useToast';
import { ApiError } from '@lib/api/errorHandler';

export const createToastSuccess = (title: string, description: string) => {
  return toast({
    title,
    description,
  });
};

export const createToastError = (title: string) => (error: unknown) => {
  toast({
    title,
    description:
      error instanceof ApiError
        ? error.message
        : `오류가 발생했습니다. 다시 시도해주세요.`,
    variant: 'destructive',
  });
};
