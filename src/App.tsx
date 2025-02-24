import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { CATEGORY } from '~/constants';

import { Layout } from '~components/Layout';
import { PageSlider } from '~components/PageSlider';
import { ErrorFallback } from '~pages/ErrorFallback';
import { NotFound } from '~pages/NotFound';

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
            <Route index element={<PageSlider />} />
            {CATEGORY.map((page) => (
              <Route key={page.path} path={page.path} element={<PageSlider />} />
            ))}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
