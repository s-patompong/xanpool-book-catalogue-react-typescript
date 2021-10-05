import readingBookSvg from './../../../../svgs/ReadingBook.svg';

type ErrorProps = {
  message: string;
};

export default function Error({ message }: ErrorProps) {
  return (
    <div className="text-center flex flex-col space-y-4">
      <div>
        <img
          src={readingBookSvg}
          alt="Not found data."
          className="w-48 mx-auto"
        />
      </div>
      <div className="text-gray-600">{message}</div>
    </div>
  );
}
