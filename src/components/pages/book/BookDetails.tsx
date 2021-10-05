import { Link, useParams } from 'react-router-dom';
import QueryResultWrapper from '../../displays/shared/widgets/QueryResultWrapper';
import useBook from '../../../hooks/api/book/useBook';
import { ArrowSmLeftIcon } from '@heroicons/react/solid';
import Title from '../../layouts/Title';
import React from 'react';

type BookDetailsParams = {
  id: string;
};

export default function BookDetails(): JSX.Element {
  const { id } = useParams<BookDetailsParams>();
  const { isLoading, error, data: book } = useBook({ id: Number(id) });

  return (
    <div className="flex flex-col space-y-6">
      <Title title={book?.title || ''} />

      <Link to="/">
        <div className="flex space-x-1 items-center group">
          <ArrowSmLeftIcon className="w-5 text-red-600 opacity-50 group-hover:opacity-100 transition duration-500" />
          <span className="uppercase text-xs font-bold pt-[1px] text-gray-500 group-hover:text-red-600 transition duration-500">
            Back to book listing
          </span>
        </div>
      </Link>

      <QueryResultWrapper
        isLoading={isLoading}
        loadingMessage="Fetching book data"
        error={error}
        errorMessage={`Failed to load book data. Please try again in a few moments.`}
      >
        {book && (
          <div className="flex flex-col space-y-4">
            <div className="text-center">
              <h1 className="text-4xl font-semibold">{book.title}</h1>
              <p className="text-gray-500">Published in {book.year}</p>
            </div>
            <div>
              <p dangerouslySetInnerHTML={{ __html: book.description }} />
            </div>
          </div>
        )}
      </QueryResultWrapper>
    </div>
  );
}
