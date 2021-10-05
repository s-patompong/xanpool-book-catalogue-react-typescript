import { RefreshIcon } from '@heroicons/react/solid';

type LoadingProps = {
  message?: string;
};

export default function Loading({ message = 'Loading' }: LoadingProps) {
  return (
    <div className="flex space-x-2 items-center text-gray-600">
      <RefreshIcon className="w-5 animate-spin" />
      <span>{message}...</span>
    </div>
  );
}
