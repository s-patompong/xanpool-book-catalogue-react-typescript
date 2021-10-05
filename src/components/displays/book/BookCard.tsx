import { Book } from '../../../interfaces/Book';
import { Link } from 'react-router-dom';

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link to={`/books/${book.id}`}>
      <div className="border rounded-lg p-6 hover:border-red-600 transition duration-500 hover:ring-4 hover:ring-red-700 hover:ring-opacity-50">
        <h1 className="text-2xl">{book.title}</h1>
        <p className="text-sm text-gray-600">Published in {book.year}</p>
      </div>
    </Link>
  );
}
