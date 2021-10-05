import useBackendData from '../shared/useBackendData';
import { Book } from '../../../interfaces/Book';
import { UseQueryResult } from 'react-query';

type UseBookProps = {
  id: number;
};

export default function useBook({ id }: UseBookProps): UseQueryResult<Book> {
  return useBackendData<Book>({ endpoint: `/books/${id}` });
}
