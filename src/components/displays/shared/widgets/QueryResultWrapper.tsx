import React from 'react';
import Loading from './Loading';
import Error from './Error';

type QueryResultWrapperProps = {
  isLoading: boolean;
  loadingMessage?: string;
  error: unknown;
  errorMessage: string;
  children: React.ReactNode;
};

export default function QueryResultWrapper({
  isLoading,
  loadingMessage,
  error,
  errorMessage,
  children,
}: QueryResultWrapperProps) {
  return (
    <>
      {isLoading ? (
        <Loading message={loadingMessage} />
      ) : (
        <>{error ? <Error message={errorMessage} /> : <div>{children}</div>}</>
      )}
    </>
  );
}
