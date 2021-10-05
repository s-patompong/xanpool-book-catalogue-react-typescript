import hangout from './../../../svgs/Hangout.svg';
import React from 'react';

export default function NotFound(): JSX.Element {
  return (
    <div className="text-center flex flex-col space-y-4">
      <div>
        <img src={hangout} alt="Not found data." className="w-72 mx-auto" />
      </div>
      <div className="text-gray-600">
        There is nothing here, but let's hangout!
      </div>
    </div>
  );
}
