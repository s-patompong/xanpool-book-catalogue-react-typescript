import useBackendData from '../shared/useBackendData';
import { Book } from '../../../interfaces/Book';

export default function useBooks() {
  return useBackendData<Book[]>({ endpoint: '/books' });
}
