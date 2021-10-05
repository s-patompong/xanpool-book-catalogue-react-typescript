import { useQuery } from 'react-query';
import { ApiClient } from '../../../services/api/ApiClient';

type UseBackendDataProps = {
  endpoint: string;
};

export default function useBackendData<T>({ endpoint }: UseBackendDataProps) {
  return useQuery<T>(endpoint, () => ApiClient.get(endpoint));
}
