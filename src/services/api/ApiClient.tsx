import axios, { AxiosInstance } from 'axios';

class _ApiClient {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: String(import.meta.env.VITE_SERVER_URL),
    });
  }

  get(endpoint: string) {
    return this.client.get(endpoint).then(({ data }) => data);
  }
}

export const ApiClient = new _ApiClient();
