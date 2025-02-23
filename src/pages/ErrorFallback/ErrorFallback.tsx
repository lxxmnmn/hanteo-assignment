import { FallbackProps } from 'react-error-boundary';
import { ApiError } from '~api/instance';
import { useErrorStore } from '~/stores';

import './ErrorFallback.scss';

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const { setError } = useErrorStore();

  const resetError = () => {
    setError(null);
    resetErrorBoundary();
  };

  return (
    <main className="error">
      <section className="error__content">
        <h1 className="error__title">ERROR</h1>
        <p className="error__desc">
          {(error instanceof ApiError && error.message) || '지금은 요청을 처리할 수 없습니다.'}
        </p>
      </section>
      <button type="button" className="error__button" onClick={resetError}>
        다시 시도하기
      </button>
    </main>
  );
};

export default ErrorFallback;
