import logo from './../../favicon.png';
import { Link } from 'react-router-dom';
import ScaleOnHover from '../displays/shared/animations/ScaleOnHover';

export default function Header(): JSX.Element {
  return (
    <div className="border-b-2 pb-6 border-gray-400 border-dashed">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-1">
          <div className="text-4xl font-extrabold text-gray-700 border-b-4 border-red-600 pt-3">
            Bookworm
          </div>
          <p className="text-xs uppercase font-bold tracking-wide text-gray-500 text-center">
            For everyday pleasure
          </p>
        </div>
        <Link to="/">
          <ScaleOnHover>
            <img src={logo} alt="Book Worm" className="w-20" />
          </ScaleOnHover>
        </Link>
      </div>
    </div>
  );
}
