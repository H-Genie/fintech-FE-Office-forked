import { HTTPError } from 'ky';

export class ApiError extends Error {
  constructor(
    public status: number,
    public data: unknown,
    public message: string = '서버 에러가 발생했습니다.',
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

const statusMessages: Record<number, string> = {
  400: '잘못된 요청입니다.',
  401: '인증이 필요합니다.',
  403: '접근 권한이 없습니다.',
  404: '리소스를 찾을 수 없습니다.',
  500: '서버 에러가 발생했습니다.',
};

export const handleError = async (error: unknown) => {
  if (error instanceof HTTPError) {
    const status = error.response.status;
    let data;
    try {
      data = await error.response.json();
    } catch {
      data = null;
    }

    throw new ApiError(
      status,
      data,
      statusMessages[status] || '알 수 없는 에러가 발생했습니다.',
    );
  }
  throw error;
};
