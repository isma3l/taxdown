import axios from 'axios';

const BASE_URL = 'http://localhost:8000/';

const axiosConfig = {
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
  timeout: 5000,
};

const apiClient = axios.create(axiosConfig);

export async function get<T>(url: string): Promise<T> {
  const { data } = await apiClient.get(url);
  return data;
}

export async function post<S, T>(url: string, body: S): Promise<T> {
  const { data } = await apiClient.post(url, body);
  return data;
}
