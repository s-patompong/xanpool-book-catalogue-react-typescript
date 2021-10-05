import useBackendData from '../shared/useBackendData';
import { Book } from '../../../interfaces/Book';

type UseBookProps = {
  id: number;
};

export default function useBook({ id }: UseBookProps) {
  return useBackendData<Book>({ endpoint: `/books/${id}` });
}
