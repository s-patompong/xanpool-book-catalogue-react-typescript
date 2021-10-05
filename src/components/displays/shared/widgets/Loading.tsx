import { RefreshIcon } from '@heroicons/react/solid';
import React from 'react';

type LoadingProps = {
  message?: string;
};

export default function Loading({
  message = 'Loading',
}: LoadingProps): JSX.Element {
  return (
    <div className="flex space-x-2 items-center text-gray-600">
      <RefreshIcon className="w-5 animate-spin" />
      <span>{message}...</span>
    </div>
  );
}
