import useBackendData from '../shared/useBackendData';
import { Book } from '../../../interfaces/Book';
import { UseQueryResult } from 'react-query';

export default function useBooks(): UseQueryResult<Book[]> {
  return useBackendData<Book[]>({ endpoint: '/books' });
}
