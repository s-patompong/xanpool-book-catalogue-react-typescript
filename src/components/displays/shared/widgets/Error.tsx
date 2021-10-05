import readingBookSvg from './../../../../svgs/ReadingBook.svg';
import React from 'react';

type ErrorProps = {
  message: string;
};

export default function Error({ message }: ErrorProps): JSX.Element {
  return (
    <div className="text-center flex flex-col space-y-4">
      <div>
        <img
          src={readingBookSvg}
          alt="Not found data."
          className="w-72 mx-auto"
        />
      </div>
      <div className="text-gray-600">{message}</div>
    </div>
  );
}
