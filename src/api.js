import axios from 'axios';
import { getConfig } from './config.js';

export async function makeRequest(endpoint, options = {}) {
  const { apiKey, baseUrl } = getConfig();

  const config = {
    baseURL: baseUrl || 'https://api.example.com',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  };

  const response = await axios({
    url: endpoint,
    ...config
  });

  return response.data;
}
