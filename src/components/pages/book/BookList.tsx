import { Book } from '../../../interfaces/Book';
import QueryResultWrapper from '../../displays/shared/widgets/QueryResultWrapper';
import useBooks from '../../../hooks/api/book/useBooks';
import BookCard from '../../displays/book/BookCard';
import React from 'react';
import Title from '../../layouts/Title';

export default function BookList(): JSX.Element {
  const { isLoading, error, data: books } = useBooks();

  return (
    <>
      <Title title="Book List" />
      <QueryResultWrapper
        isLoading={isLoading}
        loadingMessage="Fetching book list"
        error={error}
        errorMessage={`Failed to load book list. Please try again in a few moments.`}
      >
        <div className="flex flex-col space-y-4">
          {books?.map((book: Book) => (
            <div key={book.id}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </QueryResultWrapper>
    </>
  );
}
