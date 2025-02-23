import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';

import { Layout } from '~components/Layout';
import { ErrorFallback } from '~pages/ErrorFallback';
import { NotFound } from '~pages/NotFound';
import { Chart } from '~pages/Chart';

import './App.scss';

const App = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={() => reset}
      fallbackRender={({ error, resetErrorBoundary }: FallbackProps) => (
        <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />
      )}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Chart />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
