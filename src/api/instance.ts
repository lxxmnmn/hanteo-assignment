import axios, { AxiosInstance, AxiosError } from 'axios';
import { useErrorStore } from '~/stores';

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

export const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const { setError } = useErrorStore();

    if (error.response) {
      const { status } = error.response;
      const message = status >= 500 ? '서버 오류가 발생했습니다.' : '잘못된 요청입니다.';
      const apiError = new ApiError(status, message);

      setError(apiError);
      return Promise.reject(apiError);
    }

    const networkError = new ApiError(0, '네트워크 오류가 발생했습니다.');
    setError(networkError);
    return Promise.reject(networkError);
  }
);
