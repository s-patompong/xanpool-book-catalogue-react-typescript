import { useQuery, UseQueryResult } from 'react-query';
import { ApiClient } from '../../../services/api/ApiClient';

type UseBackendDataProps = {
  endpoint: string;
};

export default function useBackendData<T>({
  endpoint,
}: UseBackendDataProps): UseQueryResult<T> {
  return useQuery<T>(endpoint, () => ApiClient.get(endpoint));
}
